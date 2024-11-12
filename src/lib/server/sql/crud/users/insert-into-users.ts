import type { Database } from 'bun:sqlite';

export type InsertIntoUsersParams = {
	id?: string;
	github_id?: number | null;
	email?: string | null;
	username?: string | null;
	name?: string | null;
	avatar_url?: string | null;
	bio?: string | null;
	location?: string | null;
	twitter?: string | null;
	company?: string | null;
	website?: string | null;
	role?: number | null;
	created_at?: number | null;
	updated_at?: number | null;
}

export type InsertIntoUsersResult = {
	changes: number;
	lastInsertRowid: number;
}

export function insertIntoUsers(db: Database, params: InsertIntoUsersParams): InsertIntoUsersResult {

	const keys = Object.keys(params) as Array<keyof InsertIntoUsersParams>;
	const columns = keys.filter(key => params[key] !== undefined);
	const values = columns.map(col => params[col]!);

	const sql = columns.length == 0
		? `INSERT INTO users DEFAULT VALUES`
		: `INSERT INTO users(${columns.join(',')}) VALUES(${columns.map(_ => '?').join(',')})`

	return db.prepare(sql)
		.run(...values) as InsertIntoUsersResult;
}