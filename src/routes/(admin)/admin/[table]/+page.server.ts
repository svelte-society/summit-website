import { schemas } from "$lib/schemas";
import { db } from "$lib/server/db";
import { error } from "@sveltejs/kit";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms/server";

const VALID_TABLES = ["users", "conferences", "talks", "sponsors", "roles"];

export async function load({ params, url }) {
	if (!VALID_TABLES.includes(params.table)) {
		error(404, "Table not found");
	}

	const form = await superValidate(url, zod(schemas.query));
	const { page, perPage, sort, order, search } = form.data;

	const offset = (page - 1) * perPage;

	try {
		const query = `
            SELECT * FROM ${params.table}
            ${sort ? `ORDER BY ${sort} ${order}` : ""}
            LIMIT ? OFFSET ?
        `;

		const countQuery = `SELECT COUNT(*) as total FROM ${params.table}`;

		const [items, countResult] = await Promise.all([
			db.prepare(query).all(perPage, offset),
			db.prepare(countQuery).get(),
		]);

		return {
			items,
			pagination: {
				page,
				perPage,
				total: countResult.total,
				totalPages: Math.ceil(countResult.total / perPage),
			},
			form,
		};
	} catch (e) {
		console.error(e);
		error(500, "Database error");
	}
}
