import type { Database } from 'bun:sqlite';

export type InsertIntoRolesParams = {
	id?: number;
	name: string;
	value: string;
	description: string;
	active?: number;
	created_at?: number | null;
}

export type InsertIntoRolesResult = {
	changes: number;
	lastInsertRowid: number;
}

export function insertIntoRoles(db: Database, params: InsertIntoRolesParams): InsertIntoRolesResult {

	const keys = Object.keys(params) as Array<keyof InsertIntoRolesParams>;
	const columns = keys.filter(key => params[key] !== undefined);
	const values = columns.map(col => params[col]!);

	const sql = columns.length == 0
		? `INSERT INTO roles DEFAULT VALUES`
		: `INSERT INTO roles(${columns.join(',')}) VALUES(${columns.map(_ => '?').join(',')})`

	return db.prepare(sql)
		.run(...values) as InsertIntoRolesResult;
}