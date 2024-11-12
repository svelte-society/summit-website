import type { Database } from 'bun:sqlite';

export type SelectFromConferencesParams = {
	id: string;
}

export type SelectFromConferencesResult = {
	id: string;
	title: string;
	subtitle: string;
	year: number;
	season?: 'spring' | 'summer' | 'fall' | 'winter';
	date?: number;
	type: 'virtual' | 'in-person';
	speaker_status?: 'cfp_open' | 'cfp_closed' | 'show_speakers' | 'videos_ready';
	youtube_id?: string;
	is_active?: number;
	created_at?: number;
	updated_at?: number;
}

export function selectFromConferences(db: Database, params: SelectFromConferencesParams): SelectFromConferencesResult | null {

	const sql = `SELECT
		id,
		title,
		subtitle,
		year,
		season,
		date,
		type,
		speaker_status,
		youtube_id,
		is_active,
		created_at,
		updated_at
	FROM conferences
	WHERE id = ?`

	return db.prepare(sql)
		.values(params.id)
		.map(data => mapArrayToSelectFromConferencesResult(data))[0];
}

function mapArrayToSelectFromConferencesResult(data: any) {
	const result: SelectFromConferencesResult = {
		id: data[0],
		title: data[1],
		subtitle: data[2],
		year: data[3],
		season: data[4],
		date: data[5],
		type: data[6],
		speaker_status: data[7],
		youtube_id: data[8],
		is_active: data[9],
		created_at: data[10],
		updated_at: data[11]
	}
	return result;
}