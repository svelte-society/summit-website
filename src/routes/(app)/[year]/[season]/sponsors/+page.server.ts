

export const prerender = 'auto'

export const load = (async ({ fetch }) => {
    const meta = {
        title: 'Sponsor Deck',
        description: 'Sponsor deck for Svelte Summit'
    }

    return { meta };
});