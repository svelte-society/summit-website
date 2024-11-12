import type { Database } from 'bun:sqlite';

export type InsertIntoSponsorsParams = {
	id?: string;
	name: string;
	website_url: string;
	type?: 'platinum' | 'gold' | 'silver' | 'meetball' | 'partner' | null;
	logo_url: string;
	description?: string | null;
	created_at?: number | null;
	updated_at?: number | null;
}

export type InsertIntoSponsorsResult = {
	changes: number;
	lastInsertRowid: number;
}

export function insertIntoSponsors(db: Database, params: InsertIntoSponsorsParams): InsertIntoSponsorsResult {

	const keys = Object.keys(params) as Array<keyof InsertIntoSponsorsParams>;
	const columns = keys.filter(key => params[key] !== undefined);
	const values = columns.map(col => params[col]!);

	const sql = columns.length == 0
		? `INSERT INTO sponsors DEFAULT VALUES`
		: `INSERT INTO sponsors(${columns.join(',')}) VALUES(${columns.map(_ => '?').join(',')})`

	return db.prepare(sql)
		.run(...values) as InsertIntoSponsorsResult;
}