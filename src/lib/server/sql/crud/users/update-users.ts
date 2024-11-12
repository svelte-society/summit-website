import type { Database } from 'bun:sqlite';

export type UpdateUsersData = {
	github_id?: number | null;
	email?: string | null;
	username?: string | null;
	name?: string | null;
	avatar_url?: string | null;
	bio?: string | null;
	location?: string | null;
	twitter?: string | null;
	company?: string | null;
	website?: string | null;
	role?: number | null;
	created_at?: number | null;
	updated_at?: number | null;
}

export type UpdateUsersParams = {
	id: string;
}

export type UpdateUsersResult = {
	changes: number;
}

export function updateUsers(db: Database, data: UpdateUsersData, params: UpdateUsersParams): UpdateUsersResult {

	const keys = Object.keys(data) as Array<keyof UpdateUsersData>;
	const columns = keys.filter(key => data[key] !== undefined);
	const values = columns.map(col => data[col]!).concat(params.id);

	const sql = `
	UPDATE users
	SET ${columns.map(col => `${col} = ?`).join(', ')}
	WHERE id = ?`

	return db.prepare(sql)
		.run(...values) as UpdateUsersResult;
}