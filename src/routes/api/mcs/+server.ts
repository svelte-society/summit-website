import { PUBLIC_API_URL } from '$env/static/public';
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types';
import type { SpeakersResponse } from '$lib/pocketbase-types';

export const prerender = true

export const GET = (async ({ url, fetch }) => {
    const res = await fetch(`${PUBLIC_API_URL}/collections/speakers/records`)

    const data = await res.json()

    // Filter out MC
    const mcs = data.items.filter((person: SpeakersResponse) => person.isMc)

    return json(mcs);
  }) satisfies RequestHandler;