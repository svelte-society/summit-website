import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = (async ({ params }) => {
    const { year, season } = params
    
    const pb = new PocketBase(PUBLIC_API_URL);
    await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)

    const conf = await pb.collection('Conference').getFirstListItem(`year='${year}' && season='${season}'`, {
        expand: 'sponsors,talks,mc,questions,statistics,highlights,packages,highlights',
    });

    const expandedConf = {...conf, ...conf.expand}
    delete expandedConf.expand

    return json(expandedConf)
  })