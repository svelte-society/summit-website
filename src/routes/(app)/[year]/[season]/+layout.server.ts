import type { Config } from '@sveltejs/adapter-vercel';
import { hasDatePassed, formatDate } from '$lib/utils.js';
import type { ConferenceResponse, PackagesResponse, QuestionsResponse, SponsorRecord, SponsorResponse, StatisticsResponse, SvelteHighlightsResponse, TalkResponse } from '$lib/pocketbase-types.js';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';

type Texpand = {
  sponsors: SponsorRecord[],
  talks: TalkResponse,
  questions: QuestionsResponse,
  statistics: StatisticsResponse,
  highlights: SvelteHighlightsResponse,
  packages: PackagesResponse,
}

export const config: Config = {
  runtime: 'edge',
  regions: 'all'
};

export const load = (async ({ params, locals }) => {
  const { year, season } = params
  const { pb } = locals
  const filter = pb.filter('year = {:year} && season = {:season}', {
    year, season
  })

  await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)

  const conf = await pb.collection('Conference').getFirstListItem<ConferenceResponse<Texpand>>(filter, {
      expand: 'sponsors,talks,talks.speakers,talks.speaker,mc,questions,statistics,highlights,packages',
       });

  const conference = {...conf, ...conf.expand}

  const is_old = hasDatePassed(conference.date)

  let partner: SponsorRecord[] = []
  let platinum: SponsorRecord[] = []
  let gold: SponsorRecord[] = []

  partner = conference.expand?.sponsors?.filter((sponsor: SponsorRecord) => sponsor.type === 'partner') || []
  platinum = conference.expand?.sponsors?.filter((sponsor: SponsorRecord) => sponsor.type === 'platinum') || []
  gold = conference.expand?.sponsors?.filter((sponsor: SponsorRecord) => sponsor.type === 'gold') || []

  delete conference.expand
  
  if (conference.open_to_sponsor) {
    platinum = platinum.concat(Array(3 - platinum.length).fill(undefined))
    gold = gold.concat(Array(6 - gold.length).fill(undefined))
    partner = partner.concat(Array(1 - partner.length).fill(undefined))
  }

  const sponsors = {
      platinum,
      gold,
      partner
  }
  const meta = {
      title: conference.meta_title,
      description: conference.meta_description,
      image: pb.getFileUrl(conf, conference.meta_img)
  }

  const sortedSessions = conference.talks.sort((a: TalkResponse, b: TalkResponse) => { return a.priority > b.priority})

  return { id: conference.id, questions: conference.questions, sponsors, sessions: sortedSessions, mcs: conference.mc, meta, subtitle: conference.subtitle, date: formatDate(new Date(conference.date)), primary_color: conference.primary_color, secondary_color: conference.secondary_color, text_color: conference.text_color, packages: conference.packages, statistics: conference.statistics, highlights: conference.highlights, is_old, speaker_status: conference.speaker_status, youtube_id: conference.youtube_id };
})