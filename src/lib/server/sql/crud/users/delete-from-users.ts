import type { Database } from 'bun:sqlite';

export type DeleteFromUsersParams = {
	id: string;
}

export type DeleteFromUsersResult = {
	changes: number;
}

export function deleteFromUsers(db: Database, params: DeleteFromUsersParams): DeleteFromUsersResult {

	const sql = `DELETE
	FROM users
	WHERE id = ?`

	return db.prepare(sql)
		.run(params.id) as DeleteFromUsersResult;
}