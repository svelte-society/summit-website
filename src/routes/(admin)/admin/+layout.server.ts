import { db } from "$lib/server/db";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms/server";

const VALID_TABLES = ["users", "conferences", "talks", "sponsors", "roles"];

export async function load() {
	const query = db.prepare(`
	  SELECT
        name
    FROM sqlite_master
    WHERE
        type = 'table'
        AND name NOT GLOB '*_*'
        AND name != 'sessions'
    ORDER BY name;`);

	const tables = query.all().map((t) => t.name);
	return { tables };
}
