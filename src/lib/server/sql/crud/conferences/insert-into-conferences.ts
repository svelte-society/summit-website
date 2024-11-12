import type { Database } from 'bun:sqlite';

export type InsertIntoConferencesParams = {
	id?: string;
	title: string;
	subtitle: string;
	year: number;
	season?: 'spring' | 'summer' | 'fall' | 'winter' | null;
	date?: number | null;
	type: 'virtual' | 'in-person';
	speaker_status?: 'cfp_open' | 'cfp_closed' | 'show_speakers' | 'videos_ready' | null;
	youtube_id?: string | null;
	is_active?: number | null;
	created_at?: number | null;
	updated_at?: number | null;
}

export type InsertIntoConferencesResult = {
	changes: number;
	lastInsertRowid: number;
}

export function insertIntoConferences(db: Database, params: InsertIntoConferencesParams): InsertIntoConferencesResult {

	const keys = Object.keys(params) as Array<keyof InsertIntoConferencesParams>;
	const columns = keys.filter(key => params[key] !== undefined);
	const values = columns.map(col => params[col]!);

	const sql = columns.length == 0
		? `INSERT INTO conferences DEFAULT VALUES`
		: `INSERT INTO conferences(${columns.join(',')}) VALUES(${columns.map(_ => '?').join(',')})`

	return db.prepare(sql)
		.run(...values) as InsertIntoConferencesResult;
}