import type { Config } from '@sveltejs/adapter-vercel';
 
export const config: Config = {
  runtime: 'edge',
  regions: 'all'
};

export const load = (async ({ fetch, request }) => {
  const res = await fetch('/api/conference?year=2023&season=fall')
  const conference = await res.json()

  const platinum = conference.sponsors.filter(sponsor => sponsor.type === 'platinum')
  const gold = conference.sponsors.filter(sponsor => sponsor.type === 'gold')

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

  return { questions: conference.questions, sponsors, sessions: conference.talks, mcs: conference.mc, meta, subtitle: conference.title, date: formatDate(new Date(conference.date)), primary_color: conference.primary_color, secondary_color: conference.secondary_color, text_color: conference.text_color };
})

/**
 * Converts a JS date object to a custom formatted string.
 *
 * @param {Date} date - The date object to format.
 * @returns {string} - The formatted date string.
 */
function formatDate(date: Date): string {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];    const day = date.getUTCDate();
  const monthIndex = date.getUTCMonth();
  const year = date.getUTCFullYear();

  return `${months[monthIndex]} ${day} ${year}`;
}