import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';
import { fail, json } from '@sveltejs/kit'

export const prerender = true

export const GET = (async ({ url, fetch, request }) => {
    const params = new URLSearchParams(url.search);
    const year = params.get('year')
    const season = params.get('season')

    if (!year || !season) {
        throw fail(404)
    }

    const pb = new PocketBase('https://summit-api-v2.sveltesociety.dev');
    await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)

    const conf = await pb.collection('Conference').getFirstListItem(`year='${year}' && season='${season}'`, {
        expand: 'sponsors,talks,mc,questions,statistics,highlights',
    });

    const expandedConf = {...conf, ...conf.expand}
    delete expandedConf.expand

    return json(expandedConf)
  })