import type { Database } from 'bun:sqlite';

export type UpdateSessionsData = {
	user_id: string;
	session_token: string;
	expires_at: string;
	created_at?: number | null;
}

export type UpdateSessionsParams = {
	id: number;
}

export type UpdateSessionsResult = {
	changes: number;
}

export function updateSessions(db: Database, data: UpdateSessionsData, params: UpdateSessionsParams): UpdateSessionsResult {

	const keys = Object.keys(data) as Array<keyof UpdateSessionsData>;
	const columns = keys.filter(key => data[key] !== undefined);
	const values = columns.map(col => data[col]!).concat(params.id);

	const sql = `
	UPDATE sessions
	SET ${columns.map(col => `${col} = ?`).join(', ')}
	WHERE id = ?`

	return db.prepare(sql)
		.run(...values) as UpdateSessionsResult;
}