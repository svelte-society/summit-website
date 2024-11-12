import type { Database } from 'bun:sqlite';

export type UpdateTalksData = {
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

export type UpdateTalksParams = {
	id: string;
}

export type UpdateTalksResult = {
	changes: number;
}

export function updateTalks(db: Database, data: UpdateTalksData, params: UpdateTalksParams): UpdateTalksResult {

	const keys = Object.keys(data) as Array<keyof UpdateTalksData>;
	const columns = keys.filter(key => data[key] !== undefined);
	const values = columns.map(col => data[col]!).concat(params.id);

	const sql = `
	UPDATE talks
	SET ${columns.map(col => `${col} = ?`).join(', ')}
	WHERE id = ?`

	return db.prepare(sql)
		.run(...values) as UpdateTalksResult;
}