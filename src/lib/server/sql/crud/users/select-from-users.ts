import type { Database } from 'bun:sqlite';

export type SelectFromUsersParams = {
	id: string;
}

export type SelectFromUsersResult = {
	id: string;
	github_id?: number;
	email?: string;
	username?: string;
	name?: string;
	avatar_url?: string;
	bio?: string;
	location?: string;
	twitter?: string;
	company?: string;
	website?: string;
	role?: number;
	created_at?: number;
	updated_at?: number;
}

export function selectFromUsers(db: Database, params: SelectFromUsersParams): SelectFromUsersResult | null {

	const sql = `SELECT
		id,
		github_id,
		email,
		username,
		name,
		avatar_url,
		bio,
		location,
		twitter,
		company,
		website,
		role,
		created_at,
		updated_at
	FROM users
	WHERE id = ?`

	return db.prepare(sql)
		.values(params.id)
		.map(data => mapArrayToSelectFromUsersResult(data))[0];
}

function mapArrayToSelectFromUsersResult(data: any) {
	const result: SelectFromUsersResult = {
		id: data[0],
		github_id: data[1],
		email: data[2],
		username: data[3],
		name: data[4],
		avatar_url: data[5],
		bio: data[6],
		location: data[7],
		twitter: data[8],
		company: data[9],
		website: data[10],
		role: data[11],
		created_at: data[12],
		updated_at: data[13]
	}
	return result;
}