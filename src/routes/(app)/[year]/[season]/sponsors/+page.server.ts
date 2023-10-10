

export const prerender = true

export const load = (async ({ fetch }) => {
    const meta = {
        title: 'Sponsor Deck',
        description: 'Sponsor deck for Svelte Summit Fall 2023'
    }

    return { meta };
});