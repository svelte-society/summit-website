import type { Database } from 'bun:sqlite';

export type UpdateConferencesData = {
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

export type UpdateConferencesParams = {
	id: string;
}

export type UpdateConferencesResult = {
	changes: number;
}

export function updateConferences(db: Database, data: UpdateConferencesData, params: UpdateConferencesParams): UpdateConferencesResult {

	const keys = Object.keys(data) as Array<keyof UpdateConferencesData>;
	const columns = keys.filter(key => data[key] !== undefined);
	const values = columns.map(col => data[col]!).concat(params.id);

	const sql = `
	UPDATE conferences
	SET ${columns.map(col => `${col} = ?`).join(', ')}
	WHERE id = ?`

	return db.prepare(sql)
		.run(...values) as UpdateConferencesResult;
}