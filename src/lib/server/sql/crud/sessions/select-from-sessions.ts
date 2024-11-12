import type { Database } from 'bun:sqlite';

export type SelectFromSessionsParams = {
	id: number;
}

export type SelectFromSessionsResult = {
	id: number;
	user_id: string;
	session_token: string;
	expires_at: string;
	created_at?: number;
}

export function selectFromSessions(db: Database, params: SelectFromSessionsParams): SelectFromSessionsResult | null {

	const sql = `SELECT
		id,
		user_id,
		session_token,
		expires_at,
		created_at
	FROM sessions
	WHERE id = ?`

	return db.prepare(sql)
		.values(params.id)
		.map(data => mapArrayToSelectFromSessionsResult(data))[0];
}

function mapArrayToSelectFromSessionsResult(data: any) {
	const result: SelectFromSessionsResult = {
		id: data[0],
		user_id: data[1],
		session_token: data[2],
		expires_at: data[3],
		created_at: data[4]
	}
	return result;
}