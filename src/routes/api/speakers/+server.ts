import { PUBLIC_API_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true

export const GET = (async ({ url, fetch }) => {
    const res = await fetch(`${PUBLIC_API_URL}/collections/speakers/records`)

    return new Response(res.body);
  }) satisfies RequestHandler;