import { API_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const prerender = true

export const load = (async ({ fetch }) => {
    const res = await fetch(`${API_URL}/collections/sponsor_packages/records`)
    const { items } = await res.json()
    return { packages: items};
}) satisfies PageServerLoad;