import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';

import { componentToPng } from './renderImage';
import OG from './OG.svelte'

export const GET = async ({ params }) => {
    const pb = new PocketBase(PUBLIC_API_URL);
    await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)
    const conference = await pb.collection('Conference').getFirstListItem(`talks ~ "${params.id}"`, {
        expand: 'talks,talks.speakers',
        fields: 'expand.talks.title,expand.talks.expand,expand.talks.id.speakers,primary_color,secondary_color,title,subtitle,year,season'
    });
    const expandedConf = {...conference, ...conference.expand}
    delete expandedConf.expand

    const [talk] = expandedConf.talks.filter(talk => talk.id === params.id)

    const expandedTalk = {...talk, ...talk.expand}
    delete expandedTalk.expand

	const width = 1200;
	const height = 600;
	return componentToPng(OG, { conference, talk: expandedTalk }, height, width);
};