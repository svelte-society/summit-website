import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';
import { formatDate } from '$lib/utils.js';
import type { ConferenceRecord } from '$lib/pocketbase-types.js';

export const prerender = true

export const load = (async ({ fetch }) => {
    const pb = new PocketBase(PUBLIC_API_URL);
    await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)
    const resultList = await pb.collection('Conference').getList<ConferenceRecord>(1, 50, {
        filter: 'is_active = true',
        fields: 'primary_color,secondary_color,text_color,year,season,subtitle,date,meta_img'
    });

    const conferences = resultList.items.map(conf => ({...conf, date: formatDate(new Date(conf.date)) }))
  
    const meta = {
        title: 'Svelte Summit - The largest Svelte-only conference in the world.',
        description: "Svelte Summit is a bi-annual conference focusing on Svelte and it's ecosystem. ",
        image: conferences[0].meta_img,
    }

    return { conferences, meta };
  })