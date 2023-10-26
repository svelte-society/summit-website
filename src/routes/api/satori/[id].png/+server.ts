import { componentToPng } from './renderImage';
import OG from './OG.svelte'

export const prerender = true

export const entries = async ({ locals }) => {
    const { pb } = locals
    const talks = await pb.collection('Talk').getFullList({
        fields: 'id'
    })
    return talks
}

export const GET = async ({ params, locals }) => {
    const { pb } = locals
    const filter = pb.filter('talks ~ {:id}', { id: params.id })
    const conference = await pb.collection('Conference').getFirstListItem(filter, {
        expand: 'talks,talks.speakers',
        fields: 'expand.talks.title,expand.talks.expand,expand.talks.id.speakers,primary_color,secondary_color,title,subtitle,year,season'
    });
    const expandedConf = {...conference, ...conference.expand}
    delete expandedConf.expand

    const [talk] = expandedConf.talks.filter(talk => talk.id === params.id)

    const expandedTalk = {...talk, ...talk.expand}
    delete expandedTalk.expand

	const width = 1200;
	const height = 630;
	return componentToPng(OG, { conference, talk: expandedTalk }, height, width);
};