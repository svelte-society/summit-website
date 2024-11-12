import type { Database } from 'bun:sqlite';

export type InsertIntoSessionsParams = {
	id?: number;
	user_id: string;
	session_token: string;
	expires_at: string;
	created_at?: number | null;
}

export type InsertIntoSessionsResult = {
	changes: number;
	lastInsertRowid: number;
}

export function insertIntoSessions(db: Database, params: InsertIntoSessionsParams): InsertIntoSessionsResult {

	const keys = Object.keys(params) as Array<keyof InsertIntoSessionsParams>;
	const columns = keys.filter(key => params[key] !== undefined);
	const values = columns.map(col => params[col]!);

	const sql = columns.length == 0
		? `INSERT INTO sessions DEFAULT VALUES`
		: `INSERT INTO sessions(${columns.join(',')}) VALUES(${columns.map(_ => '?').join(',')})`

	return db.prepare(sql)
		.run(...values) as InsertIntoSessionsResult;
}