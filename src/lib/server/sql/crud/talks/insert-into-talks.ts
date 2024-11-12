import type { Database } from 'bun:sqlite';

export type InsertIntoTalksParams = {
	id?: string;
	conference_id: string;
	title: string;
	slug: string;
	description?: string | null;
	status?: 'accepted' | 'reviewing' | 'rejected' | null;
	youtube_id?: string | null;
	format?: 'regular' | 'lightning' | null;
	level?: 'beginner' | 'intermediate' | 'advanced' | null;
	created_at?: number | null;
	updated_at?: number | null;
}

export type InsertIntoTalksResult = {
	changes: number;
	lastInsertRowid: number;
}

export function insertIntoTalks(db: Database, params: InsertIntoTalksParams): InsertIntoTalksResult {

	const keys = Object.keys(params) as Array<keyof InsertIntoTalksParams>;
	const columns = keys.filter(key => params[key] !== undefined);
	const values = columns.map(col => params[col]!);

	const sql = columns.length == 0
		? `INSERT INTO talks DEFAULT VALUES`
		: `INSERT INTO talks(${columns.join(',')}) VALUES(${columns.map(_ => '?').join(',')})`

	return db.prepare(sql)
		.run(...values) as InsertIntoTalksResult;
}