import type { ConferenceRecord } from '$lib/pocketbase-types.js';

export const load = async ({ locals }) => {
    
    const meta = {
        title: 'Admin Page - Thumbnail Generator',
        description: 'Svelte Summit Admin Page'
    }
    
    return {
        meta
    }
};