import type { Database } from 'bun:sqlite';

export type SelectFromRolesParams = {
	id: number;
}

export type SelectFromRolesResult = {
	id: number;
	name: string;
	value: string;
	description: string;
	active: number;
	created_at?: number;
}

export function selectFromRoles(db: Database, params: SelectFromRolesParams): SelectFromRolesResult | null {

	const sql = `SELECT
		id,
		name,
		value,
		description,
		active,
		created_at
	FROM roles
	WHERE id = ?`

	return db.prepare(sql)
		.values(params.id)
		.map(data => mapArrayToSelectFromRolesResult(data))[0];
}

function mapArrayToSelectFromRolesResult(data: any) {
	const result: SelectFromRolesResult = {
		id: data[0],
		name: data[1],
		value: data[2],
		description: data[3],
		active: data[4],
		created_at: data[5]
	}
	return result;
}