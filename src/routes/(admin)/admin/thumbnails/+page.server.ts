import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';
import type { ConferenceRecord } from '$lib/pocketbase-types.js';

export const load = async () => {
    const pb = new PocketBase(PUBLIC_API_URL);
    await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)
    const { items } = await pb.collection('Conference').getList<ConferenceRecord>(1, 50, {
        filter: 'is_active = true',
        fields: 'title,id'
    });
    
    const meta = {
        title: 'Admin Page - Thumbnail Generator',
        description: 'Svelte Summit Admin Page'
    }
    
    return {
        talks: items,
        meta
    }
};