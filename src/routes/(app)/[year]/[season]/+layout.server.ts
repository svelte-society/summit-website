import type { Config } from '@sveltejs/adapter-vercel';
import { hasDatePassed, formatDate } from '$lib/utils.js';
 
export const config: Config = {
  runtime: 'edge',
  regions: 'all'
};

export const load = (async ({ fetch, params }) => {
  const { year, season } = params
  const res = await fetch(`/api/conference/${year}/${season}`)
  const conference = await res.json()
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