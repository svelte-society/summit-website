import type { Database } from 'bun:sqlite';

export type CountConferencesResult = {
	total: number;
}

export function countConferences(db: Database): CountConferencesResult | null {
	const sql = `
	SELECT COUNT(*) as total FROM conferences;
	
	`
	return db.prepare(sql)
		.values()
		.map(data => mapArrayToCountConferencesResult(data))[0];
}

function mapArrayToCountConferencesResult(data: any) {
	const result: CountConferencesResult = {
		total: data[0]
	}
	return result;
}