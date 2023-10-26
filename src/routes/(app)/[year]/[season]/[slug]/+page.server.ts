export const prerender = true

export const load = (async ({ params, locals }) => {
    const { slug } = params
    const { pb } = locals

    const res = await pb.collection('Talk').getFirstListItem(`slug='${slug}'`, {
        expand: 'speakers',
        fields: 'id,meta_description,description,expand.speakers,youtube_ID,title,transcript'
    });

    const talk = {...res, ...res.expand}
    delete talk.expand

    return {
        talk,
        meta: {
            title: 'Svelte Summit - ' + talk.title,
            description: talk.meta_description,
            image: `https://sveltesummit.com/api/satori/${talk.id}.png`
        }
    };
})