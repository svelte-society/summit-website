import type { Database } from 'bun:sqlite';

export type UpdateSponsorsData = {
	name: string;
	website_url: string;
	type?: 'platinum' | 'gold' | 'silver' | 'meetball' | 'partner' | null;
	logo_url: string;
	description?: string | null;
	created_at?: number | null;
	updated_at?: number | null;
}

export type UpdateSponsorsParams = {
	id: string;
}

export type UpdateSponsorsResult = {
	changes: number;
}

export function updateSponsors(db: Database, data: UpdateSponsorsData, params: UpdateSponsorsParams): UpdateSponsorsResult {

	const keys = Object.keys(data) as Array<keyof UpdateSponsorsData>;
	const columns = keys.filter(key => data[key] !== undefined);
	const values = columns.map(col => data[col]!).concat(params.id);

	const sql = `
	UPDATE sponsors
	SET ${columns.map(col => `${col} = ?`).join(', ')}
	WHERE id = ?`

	return db.prepare(sql)
		.run(...values) as UpdateSponsorsResult;
}