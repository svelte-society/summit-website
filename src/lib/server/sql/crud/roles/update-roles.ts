import type { Database } from 'bun:sqlite';

export type UpdateRolesData = {
	name: string;
	value: string;
	description: string;
	active?: number;
	created_at?: number | null;
}

export type UpdateRolesParams = {
	id: number;
}

export type UpdateRolesResult = {
	changes: number;
}

export function updateRoles(db: Database, data: UpdateRolesData, params: UpdateRolesParams): UpdateRolesResult {

	const keys = Object.keys(data) as Array<keyof UpdateRolesData>;
	const columns = keys.filter(key => data[key] !== undefined);
	const values = columns.map(col => data[col]!).concat(params.id);

	const sql = `
	UPDATE roles
	SET ${columns.map(col => `${col} = ?`).join(', ')}
	WHERE id = ?`

	return db.prepare(sql)
		.run(...values) as UpdateRolesResult;
}