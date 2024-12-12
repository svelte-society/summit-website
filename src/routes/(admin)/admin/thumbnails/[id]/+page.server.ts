import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import type { TalkRecord } from '$lib/pocketbase-types.js';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';

export const load = async ({ params, locals }) => {
    const { pb } = locals
    await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)

    const conf = await pb.collection('Conference').getOne(params.id, {
        expand: 'talks,talks.speakers,talks.speaker',
        fields: 'title,expand.talks,expand.talks.speakers,expand.talks.speaker,primary_color,secondary_color,text_color'
    });

    const talks = conf.expand?.talks || []

    let mappedTalks = talks.map((talk: TalkRecord) => {
        const speakers = talk.expand.speaker.map((speaker) => {
            return {
                name: speaker.name,
                picture: speaker.avatar
            }
        })
        return {
            title: talk.title,
            speakers
        }
    })

    console.log(mappedTalks)
    
    const meta = {
        title: 'Admin Page - Thumbnail Generator',
        description: 'Svelte Summit Fall 2023 Admin Page'
    }
    
    return {
        talks: mappedTalks,
        meta,
        primary_color: conf.primary_color,
        secondary_color: conf.secondary_color
    }
};