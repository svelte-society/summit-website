import PocketBase from 'pocketbase';
import type { ConferenceRecord } from '$lib/pocketbase-types.js';

export const load = async ({ locals }) => {
    const { pb } = locals
    const filter = 'is_active = true'
    const { items } = await pb.collection('Conference').getList<ConferenceRecord>(1, 50, {
        filter,
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