import { db } from "$lib/server/db";
import { z } from "zod";

interface ColumnInfo {
	name: string;
	type: string;
	notnull: number;
	dflt_value: string | null;
	pk: number;
}

export function getSchema(table: string) {
	const tableSQLQuery = db.prepare(
		`SELECT sql FROM sqlite_master WHERE type="table" AND name = ?`,
	);

	const { sql: tableSQL } = tableSQLQuery.get(table);

	const columnQuery = db.prepare("SELECT * FROM pragma_table_info(?)");

	const columns = columnQuery.all([table]);

	const relationships = getTableRelationships(table);

	const schemaObject = {};
	const formFields = {};

	const userEditableColumns = columns.filter(
		(column: ColumnInfo) => !shouldExcludeColumn(column, tableSQL),
	);

	for (const column of userEditableColumns) {
		schemaObject[column.name] = getZodType(column, tableSQL);
		formFields[column.name] = getFormField(column, tableSQL);
	}

	for (const rel of relationships) {
		const relatedTable = rel.table1 === table ? rel.table2 : rel.table1;

		// Get options from related table
		const optionsQuery = db.prepare(
			`SELECT id, name as label
       FROM ${relatedTable}`,
		);

		const options = optionsQuery.all();

		const fieldName = `${relatedTable}_ids`;

		// Add to schema
		schemaObject[fieldName] = z.array(z.string()).optional();

		// Add to fields
		formFields[fieldName] = {
			type: "multiselect",
			label: `${relatedTable.charAt(0).toUpperCase() + relatedTable.slice(1)}`,
			options,
		};
	}

	return {
		schema: z.object(schemaObject),
		formFields,
	};
}

function extractEnumValues(sql: string, columnName: string): string[] | null {
	const regex = new RegExp(
		`${columnName}\\s+[^\\s]+\\s+CHECK\\s*\\(\\s*${columnName}\\s+IN\\s*\\(([^)]+)\\)\\)`,
	);
	const match = regex.exec(sql);
	if (!match) return null;

	return match[1]
		.split(",")
		.map((v) => v.trim().replace(/'/g, ""))
		.filter(Boolean);
}

function getZodType(column: ColumnInfo, tableSql: string) {
	let schema: any = z.any();

	// Start with base type
	switch (column.type.toLowerCase()) {
		case "integer":
			schema = z.number().int();
			break;
		case "text":
			schema = z.string();
			break;
		case "boolean":
			schema = z
				.union([z.boolean(), z.number().min(0).max(1)])
				.transform((val) => (typeof val === "boolean" ? (val ? 1 : 0) : val));
			break;
		case "date":
			schema = z.string(); // Could be more specific with date validation
			break;
		case "decimal":
			schema = z.number();
			break;
		default:
			schema = z.string();
	}

	// Check for enums
	const enumValues = extractEnumValues(tableSql, column.name);
	if (enumValues) {
		schema = z.enum(enumValues as [string, ...string[]]);
	}

	// Add constraints
	if (column.notnull && !column.dflt_value) {
		if (schema instanceof z.ZodString) {
			schema = schema.min(1, `${column.name} is required`);
		}
	} else {
		schema = schema.optional();
	}

	// Add defaults
	if (column.dflt_value !== null) {
		let defaultValue = column.dflt_value;
		if (defaultValue === "true") defaultValue = true;
		if (defaultValue === "false") defaultValue = false;
		if (!isNaN(Number(defaultValue))) defaultValue = Number(defaultValue);
		schema = schema.default(defaultValue);
	}

	return schema;
}

function getFormField(column: ColumnInfo, tableSql: string) {
	const enumValues = extractEnumValues(tableSql, column.name);

	const field: any = {
		label: column.name
			.split("_")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" "),
	};

	if (enumValues) {
		field.type = "select";
		field.options = enumValues.map((value) => ({
			value,
			label: value
				.split("_")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" "),
		}));
	} else {
		switch (column.type.toLowerCase()) {
			case "boolean":
				field.type = "checkbox";
				break;
			case "date":
				field.type = "date";
				break;
			case "integer":
			case "decimal":
				field.type = "number";
				break;
			default:
				field.type = "text";
		}
	}

	if (field.type === "text" || field.type === "number") {
		field.placeholder = `Enter ${field.label.toLowerCase()}`;
	}

	return field;
}

function shouldExcludeColumn(column: ColumnInfo, tableSql: string): boolean {
	// Exclude primary keys
	if (column.pk) return true;

	// Exclude created_at/updated_at timestamps
	if (["created_at", "updated_at"].includes(column.name)) return true;

	// Exclude columns with CURRENT_TIMESTAMP default
	if (column.dflt_value?.includes("CURRENT_TIMESTAMP")) return true;

	// Exclude columns with randomblob default (like generated IDs)
	if (
		tableSql.includes(`${column.name} TEXT PRIMARY KEY DEFAULT (hex(randomblob`)
	)
		return true;

	return false;
}

export const querySchema = z.object({
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().positive().max(100).default(10),
	sort: z.string().optional().default("created_at"),
	order: z.enum(["asc", "desc"]).default("desc"),
	search: z.string().trim().optional(),
});

export function getTableRelationships(tableName: string) {
	const relationshipsQuery = db.prepare(
		`SELECT
      m.name as junction_table,
      fk1.\"table\" as table1,
      fk1.\"from\" as field1,
      fk1.\"to\" as key1,
      fk2.\"table\" as table2,
      fk2.\"from\" as field2,
      fk2.\"to\" as key2
    FROM sqlite_master m
    JOIN pragma_foreign_key_list(m.name) fk1
    JOIN pragma_foreign_key_list(m.name) fk2
    WHERE m.type = 'table'
    AND m.name LIKE '%_%'  -- Junction tables have underscores
    AND fk1.id < fk2.id    -- Only get each relationship once
    AND (fk1.\"table\" = ? OR fk2.\"table\" = ?)`,
	);

	return relationshipsQuery.all([tableName, tableName]);
}

function getJunctionTableInfo(junctionTable: string) {
	// Get column order from table info
	const columnsQuery = db.prepare(`SELECT * FROM pragma_table_info(?)`);
	const columns = columnsQuery.all([junctionTable]);

	// Get foreign key information
	const foreignKeysQuery = db.prepare(
		`SELECT * FROM pragma_foreign_key_list(?)`,
	);

	const foreignKeys = foreignKeysQuery.all([junctionTable]);

	return {
		columns: columns.map((c) => c.name),
		foreignKeys: foreignKeys.map((fk) => ({
			from: fk.from, // column in junction table
			to: fk.to, // column in referenced table (usually 'id')
			table: fk.table, // referenced table name
		})),
	};
}

/**
 * Get correct order of values for junction table insert
 */
export function getJunctionInsertOrder(
	junctionTable: string,
	mainTable: string,
	mainId: string,
	relatedId: string,
) {
	const { foreignKeys } = getJunctionTableInfo(junctionTable);

	// Find which foreign key corresponds to our main table
	const mainFk = foreignKeys.find((fk) => fk.table === mainTable);

	if (!mainFk) {
		throw new Error(
			`No foreign key found for ${mainTable} in ${junctionTable}`,
		);
	}

	// The column referring to main table goes with mainId
	// The other column goes with relatedId
	const values = foreignKeys.map((fk) => {
		if (fk.table === mainTable) {
			return mainId;
		}
		return relatedId;
	});

	return {
		columns: foreignKeys.map((fk) => fk.from),
		values,
	};
}
