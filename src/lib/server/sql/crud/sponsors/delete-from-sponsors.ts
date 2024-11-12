import type { Database } from 'bun:sqlite';

export type DeleteFromSponsorsParams = {
	id: string;
}

export type DeleteFromSponsorsResult = {
	changes: number;
}

export function deleteFromSponsors(db: Database, params: DeleteFromSponsorsParams): DeleteFromSponsorsResult {

	const sql = `DELETE
	FROM sponsors
	WHERE id = ?`

	return db.prepare(sql)
		.run(params.id) as DeleteFromSponsorsResult;
}