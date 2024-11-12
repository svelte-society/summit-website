import type { Database } from 'bun:sqlite';

export type DeleteFromTalksParams = {
	id: string;
}

export type DeleteFromTalksResult = {
	changes: number;
}

export function deleteFromTalks(db: Database, params: DeleteFromTalksParams): DeleteFromTalksResult {

	const sql = `DELETE
	FROM talks
	WHERE id = ?`

	return db.prepare(sql)
		.run(params.id) as DeleteFromTalksResult;
}