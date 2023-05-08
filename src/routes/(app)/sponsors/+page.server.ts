
import { PUBLIC_API_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';

export const prerender = true

export const load = (async ({ fetch }) => {
    const [packages_res, stats_res, svelte_stats_res] = await Promise.all([
        fetch('/api/packages'),
        fetch('/api/stats'),
        fetch('/api/svelte-stats')
    ])
    const [packages, stats, svelte_stats] = await Promise.all([
        packages_res.json(),
        stats_res.json(),
        svelte_stats_res.json()
    ])

    const meta = {
        title: 'Sponsor Deck',
        description: 'Sponsor deck for Svelte Summit Spring 2023'
    }

    return { packages: packages.items, stats: stats.items, svelte_stats: svelte_stats.items, meta};
}) satisfies PageServerLoad;