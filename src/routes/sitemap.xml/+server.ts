import * as sitemap from 'super-sitemap';
import PocketBase from 'pocketbase';
import type { RequestHandler } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';

export const prerender = true

export const GET: RequestHandler = async () => {
  const pb = new PocketBase(PUBLIC_API_URL);
  await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)

  const { items } = await pb.collection('Conference').getList(1, 50, {
    filter: 'is_active = true',
    expand: 'talks',
    fields: 'year,season,talks,expand.talks'
  });
  const conferences = items.map(conf => ({...conf, ...conf.expand}))
  const year_season_talks = convertConferencesToTalkSlugs(conferences)

  const conference_slugs = items.map(({year, season}) => `${year}/${season}`)

  return await sitemap.response({
    origin: 'https://sveltesummit.com',
    excludePatterns: [
        '/admin.*',
        '/email-confirmed',
        '.*sponsors.*',
        '.*signup'
    ],
    paramValues: {
      '/[year]/[season]': conference_slugs,
      '/[year]/[season]/[slug]': year_season_talks
    }
  });
};


/**
 * Convert the given data structure to a desired format.
 * @param {Array} ConferenceRecord[] - The data array to process.
 * @returns {Array} - An array containing arrays with ['year', 'season', 'slug'] format.
 */
function convertConferencesToTalkSlugs(data: any) {
  let result = [];
  
  for (let item of data) {
    // Extract talks directly from the item
    let talksDirect = item.talks;
    // Extract talks from expand property if it exists
    let talksFromExpand = item.expand ? item.expand.talks : [];
    
    // Combine talks from both sources
    let allTalks = [...talksDirect, ...talksFromExpand];

    for (let talk of allTalks) {
      result.push([item.year.toString(), item.season, talk.slug]);
    }
  }

  return result;
}