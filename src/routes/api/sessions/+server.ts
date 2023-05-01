import { PUBLIC_API_URL } from '$env/static/public';
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types';

export const prerender = true

export const GET = (async ({ url, fetch }) => {
    const res = await fetch(`${PUBLIC_API_URL}/collections/talks/records?expand=speakers`)

    const { items } = await res.json()

    return json(items.sort((a, b) => b.priority - a.priority));
  }) satisfies RequestHandler;