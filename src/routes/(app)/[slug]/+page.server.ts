import { PUBLIC_API_URL } from '$env/static/public';

export const load = (async ({ fetch, params }) => {
    const res = await fetch(`${PUBLIC_API_URL}/collections/talks/records?filter=(slug='${params.slug}')&expand=speakers`)
    const { items } = await res.json()
    const {description, expand, href, title, meta_description} = items[0]
    const talk = {
        description,
        speakers: expand.speakers,
        href,
        title
    }

    const meta = {
        title: 'Svelte Summit Spring 2023 - ' + title,
        description: meta_description
    }

    return {
        talk, meta
    };
})