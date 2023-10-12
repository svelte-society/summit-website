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
        expand: 'sponsors,talks, talks.speakers,mc,questions,statistics,highlights,packages,highlights',
        fields: 'title,subtitle,year,season,date,meta_title,meta_description,_meta_img,sponsors,expand.sponsors,talks,expand.talks.title,expand.talks.description,expand.talks.meta_description,expand.talks.priority,expand.talks.slug,expand.talks.expand.speakers,mc,expand.mc,questions,expand.questions,statistics,expand.statistics,highlights,expand.highlights,packages,expand.packages,primary_color,secondary_color,text_color,type,speaker_status,open_to_sponsor,youtube_id'
    });

    const expandedConf = {...conf, ...conf.expand}
    delete expandedConf.expand

    return json(expandedConf)
  })