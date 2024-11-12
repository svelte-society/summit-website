import type { Database } from 'bun:sqlite';

export type SelectFromSponsorsParams = {
	id: string;
}

export type SelectFromSponsorsResult = {
	id: string;
	name: string;
	website_url: string;
	type?: 'platinum' | 'gold' | 'silver' | 'meetball' | 'partner';
	logo_url: string;
	description?: string;
	created_at?: number;
	updated_at?: number;
}

export function selectFromSponsors(db: Database, params: SelectFromSponsorsParams): SelectFromSponsorsResult | null {

	const sql = `SELECT
		id,
		name,
		website_url,
		type,
		logo_url,
		description,
		created_at,
		updated_at
	FROM sponsors
	WHERE id = ?`

	return db.prepare(sql)
		.values(params.id)
		.map(data => mapArrayToSelectFromSponsorsResult(data))[0];
}

function mapArrayToSelectFromSponsorsResult(data: any) {
	const result: SelectFromSponsorsResult = {
		id: data[0],
		name: data[1],
		website_url: data[2],
		type: data[3],
		logo_url: data[4],
		description: data[5],
		created_at: data[6],
		updated_at: data[7]
	}
	return result;
}