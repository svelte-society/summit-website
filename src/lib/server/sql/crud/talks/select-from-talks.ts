import type { Database } from 'bun:sqlite';

export type SelectFromTalksParams = {
	id: string;
}

export type SelectFromTalksResult = {
	id: string;
	conference_id: string;
	title: string;
	slug: string;
	description?: string;
	status?: 'accepted' | 'reviewing' | 'rejected';
	youtube_id?: string;
	format?: 'regular' | 'lightning';
	level?: 'beginner' | 'intermediate' | 'advanced';
	created_at?: number;
	updated_at?: number;
}

export function selectFromTalks(db: Database, params: SelectFromTalksParams): SelectFromTalksResult | null {

	const sql = `SELECT
		id,
		conference_id,
		title,
		slug,
		description,
		status,
		youtube_id,
		format,
		level,
		created_at,
		updated_at
	FROM talks
	WHERE id = ?`

	return db.prepare(sql)
		.values(params.id)
		.map(data => mapArrayToSelectFromTalksResult(data))[0];
}

function mapArrayToSelectFromTalksResult(data: any) {
	const result: SelectFromTalksResult = {
		id: data[0],
		conference_id: data[1],
		title: data[2],
		slug: data[3],
		description: data[4],
		status: data[5],
		youtube_id: data[6],
		format: data[7],
		level: data[8],
		created_at: data[9],
		updated_at: data[10]
	}
	return result;
}