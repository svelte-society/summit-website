import type { Database } from 'bun:sqlite';

export type DeleteFromSessionsParams = {
	id: number;
}

export type DeleteFromSessionsResult = {
	changes: number;
}

export function deleteFromSessions(db: Database, params: DeleteFromSessionsParams): DeleteFromSessionsResult {

	const sql = `DELETE
	FROM sessions
	WHERE id = ?`

	return db.prepare(sql)
		.run(params.id) as DeleteFromSessionsResult;
}