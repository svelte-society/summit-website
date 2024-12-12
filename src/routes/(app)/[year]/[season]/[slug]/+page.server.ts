import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';

// TODO: add back when we link to those pages
//export const prerender = true

export const load = (async ({ params, locals }) => {
    const { slug } = params
    const { pb } = locals

    pb.autoCancellation(false);
    await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)

    const res = await pb.collection('Talk').getFirstListItem(`slug='${slug}'`, {
        expand: 'speakers,speaker',
        fields: 'id,meta_description,description,expand.speakers,expand.speaker,youtube_ID,title,transcript'
    });

    const talk = {...res, ...res.expand}
    delete talk.expand

    return {
        talk,
        meta: {
            title: `Svelte Summit ${params.year} ${capitalizeFirstLetter(params.season)} - ${talk.title}`,
            description: talk.meta_description,
            image: `https://sveltesummit.com/api/satori/${talk.id}.png`
        }
    };
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}