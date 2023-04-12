import { PUBLIC_API_URL } from '$env/static/public';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true

export const GET = (async ({ url, fetch }) => {
  
    const res = await fetch(`${PUBLIC_API_URL}/collections/questions/records`)

    const data = await res.json()

    return json(data.items);
  }) satisfies RequestHandler;