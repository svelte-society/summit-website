import {
	getJunctionInsertOrder,
	getSchema,
	getTableRelationships,
} from "$lib/schemas";
import { db } from "$lib/server/db";
import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms/server";
import type { Actions, PageServerLoad } from "./$types";

// Define interfaces for the relationships
interface Relationship {
	table1: string;
	table2: string;
	junction_table: string;
	field1: string;
}

// Define interface for the data objects
interface DataObject {
	[key: string]:
		| string
		| number
		| boolean
		| null
		| undefined
		| (string | number)[];
}

interface RequestParams {
	table: string;
	id: string;
}

export const load: PageServerLoad = async ({
	params,
}: { params: { table: string; id: string } }) => {
	const { table, id } = params;

	const { schema, formFields } = getSchema(params.table);

	let form: unknown;

	if (id !== "new") {
		const item = db
			.prepare(`SELECT * FROM ${table} WHERE id = ?`)
			.get(params.id);

		if (!item) {
			error(404, "Item not found");
		}

		const relationships = getTableRelationships(table);

		for (const rel of relationships) {
			const relatedTable = rel.table1 === table ? rel.table2 : rel.table1;
			const relationFieldName = `${relatedTable}_ids`;

			// Query the junction table to get related IDs
			const relatedIdsQuery = db.prepare(
				`SELECT ${relatedTable}_id FROM ${rel.junction_table} WHERE ${table}_id = ?`,
			);

			const relatedIds = relatedIdsQuery
				.all([id])
				.map((row) => row[relatedTable + "_id"]);

			// Add the related IDs to the item
			item[relationFieldName] = relatedIds;
		}

		console.log(item);

		form = await superValidate(item, zod(schema));
	} else {
		form = await superValidate(zod(schema));
	}

	return { form, fields: formFields };
};

export const actions: Actions = {
	default: async ({
		request,
		params,
	}: RequestEvent & { params: RequestParams }) => {
		const { table, id } = params;
		if (!table) throw error(400, "Table parameter is required");

		const { schema } = getSchema(table);
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			return { form };
		}

		const relationships = getTableRelationships(table);

		const mainData: DataObject = {};
		const relationData: DataObject = {};

		for (const [key, value] of Object.entries(form.data)) {
			const isRelationField = relationships.some((rel: Relationship) => {
				const relatedTable = rel.table1 === table ? rel.table2 : rel.table1;
				return key === `${relatedTable}_ids`;
			});

			if (isRelationField) {
				relationData[key] = Array.isArray(value) ? value : [value];
			} else {
				mainData[key] = value;
			}
		}

		const insertValues = db.transaction((id: string) => {
			if (id === "new") {
				const columns = Object.keys(mainData).join(", ");
				const values = Object.values(mainData);
				const placeholders = values.map(() => "?").join(", ");

				db.prepare(
					`INSERT INTO ${table} (${columns}) VALUES (${placeholders})`,
				).run(...values);
			} else {
				const sets = Object.keys(mainData)
					.map((key) => `${key} = ?`)
					.join(", ");

				db.prepare(`UPDATE ${table} SET ${sets} WHERE id = ?`).run(
					...Object.values(mainData),
					id,
				);
			}

			for (const rel of relationships as Relationship[]) {
				const relatedTable = rel.table1 === table ? rel.table2 : rel.table1;
				const relationFieldName = `${relatedTable}_ids`;
				const relatedIds = relationData[relationFieldName] || [];

				// Clear existing relationships
				const clearRelationQuery = db.prepare(
					`DELETE FROM ${rel.junction_table}
           WHERE ${rel.field1} = ?`,
				);
				clearRelationQuery.run([id]);

				// Add new relationships
				if (relatedIds.length > 0) {
					for (const relatedId of relatedIds) {
						const { columns, values } = getJunctionInsertOrder(
							rel.junction_table,
							table,
							id,
							relatedId,
						);
						const insertRelationQuery = db.prepare(
							`INSERT INTO ${rel.junction_table} (${columns}) VALUES (?, ?)`,
						);
						insertRelationQuery.run(values);
					}
				}
			}
		});

		try {
			insertValues(id);
		} catch (e) {
			console.error(e);
			error(500, "Database error");
		}

		redirect(303, `/admin/${table}`);
	},
};
