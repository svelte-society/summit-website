import { MARKETING_API_URL, MARKETING_API_KEY } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import type { PageServerLoad, Actions } from './$types';

const emailSchema = z.object({
    email: z.string().email()
})

export const load = (async (event) => {
    const [questionRes, sponsorsRes] = await Promise.all([
        event.fetch('/api/questions'),
        event.fetch('/api/sponsors')
    ])
    const [questions, allSponsors] = await Promise.all([
        questionRes.json(),
        sponsorsRes.json()
    ])

    const platinum = allSponsors.items.filter(sponsor => sponsor.type === 'platinum')
    const gold = allSponsors.items.filter(sponsor => sponsor.type === 'gold')

    const sponsors = {
        platinum: [...platinum, ...new Array(3 - platinum.length)],
        gold: [...gold, ...new Array(6 - gold.length)]
    }

    const form = await superValidate(event, emailSchema)
    return { form, questions: questions.items, sponsors: sponsors };
}) satisfies PageServerLoad;

export const actions: Actions = {
    subscribe: async (event) => {
        const form = await superValidate(event, emailSchema)
        if (!form.valid) {
            return fail(400, { form })
        }

        const res = await event.fetch(`${MARKETING_API_URL}/contacts`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + MARKETING_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'data': {
                    'email': form.data.email
                }
            })
        })

        const data = await res.json()
        

        return { form }
    }
};