import type { Database } from 'bun:sqlite';

export type DeleteFromConferencesParams = {
	id: string;
}

export type DeleteFromConferencesResult = {
	changes: number;
}

export function deleteFromConferences(db: Database, params: DeleteFromConferencesParams): DeleteFromConferencesResult {

	const sql = `DELETE
	FROM conferences
	WHERE id = ?`

	return db.prepare(sql)
		.run(params.id) as DeleteFromConferencesResult;
}