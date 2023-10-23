import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';
import { formatDate } from '$lib/utils.js';
import type { ConferenceRecord } from '$lib/pocketbase-types.js';

export const load = (async ({}) => {
    const pb = new PocketBase(PUBLIC_API_URL);
    await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)
    const filter = pb.filter('is_active = true')
    const resultList = await pb.collection('Conference').getList<ConferenceRecord>(1, 50, {
        filter,
        fields: 'primary_color,secondary_color,text_color,year,season,subtitle,date,meta_img,id,collectionId',
        sort: 'date'
    });

    const conferences = resultList.items.map(conf => ({...conf, date: formatDate(new Date(conf.date)) }))

    const meta = {
        title: 'Svelte Summit - The largest Svelte-only conference in the world.',
        description: "Svelte Summit is a bi-annual conference focusing on Svelte and it's ecosystem. ",
        image: pb.getFileUrl(conferences[0], conferences[0].meta_img, )
    }

    return { conferences, meta };
  })