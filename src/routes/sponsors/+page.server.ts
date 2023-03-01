import type { PageServerLoad } from './$types';

export const prerender = true

export const load = (async ({ fetch }) => {
    const res = await fetch('https://summit-api.sveltesociety.dev/api/collections/sponsor_packages/records')
    const { items } = await res.json()
    return { packages: items};
}) satisfies PageServerLoad;