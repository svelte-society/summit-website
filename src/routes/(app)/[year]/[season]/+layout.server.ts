import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';
import type { Config } from '@sveltejs/adapter-vercel';
import { hasDatePassed, formatDate } from '$lib/utils.js';

export const config: Config = {
  runtime: 'edge',
  regions: 'all'
};

export const load = (async ({ fetch, params }) => {
  const { year, season } = params
    
    const pb = new PocketBase(PUBLIC_API_URL);
    await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)

    const conf = await pb.collection('Conference').getFirstListItem(`year='${year}' && season='${season}'`, {
        expand: 'sponsors,talks, talks.speakers,mc,questions,statistics,highlights,packages,highlights',
        fields: 'title,subtitle,year,season,date,meta_title,meta_description,_meta_img,sponsors,expand.sponsors,talks,expand.talks.title,expand.talks.description,expand.talks.meta_description,expand.talks.priority,expand.talks.slug,expand.talks.expand.speakers,mc,expand.mc,questions,expand.questions,statistics,expand.statistics,highlights,expand.highlights,packages,expand.packages,primary_color,secondary_color,text_color,type,speaker_status,open_to_sponsor,youtube_id'
    });

    const conference = {...conf, ...conf.expand}
    delete conference.expand

  const is_old = hasDatePassed(conference.date)

  let platinum = conference.sponsors.filter(sponsor => sponsor.type === 'platinum')
  let gold = conference.sponsors.filter(sponsor => sponsor.type === 'gold')
  
  if (conference.open_to_sponsor) {
    platinum = platinum.concat(Array(3 - platinum.length).fill(undefined))
    gold = gold.concat(Array(6 - gold.length).fill(undefined))
  }

  const sponsors = {
      platinum ,
      gold
  }

  const meta = {
      title: conference.meta_title,
      description: conference.meta_description,
      image: conference.meta_img,
      collectionId: conference.collectionId,
      recordId: conference.id
  }

  return { questions: conference.questions, sponsors, sessions: conference.talks, mcs: conference.mc, meta, subtitle: conference.title, date: formatDate(new Date(conference.date)), primary_color: conference.primary_color, secondary_color: conference.secondary_color, text_color: conference.text_color, packages: conference.packages, statistics: conference.statistics, highlights: conference.highlights, is_old, speaker_status: conference.speaker_status, youtube_id: conference.youtube_id };
})