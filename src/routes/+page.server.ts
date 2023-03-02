import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import type { PageServerLoad, Actions } from './$types';

const emailSchema = z.object({
    email: z.string().email()
})

export const load = (async (event) => {
    const [questionRes] = await Promise.all([
        event.fetch('/api/questions')
    ])
    const [questions] = await Promise.all([
        questionRes.json()
    ])
    const form = await superValidate(event, emailSchema)
    return { form, questions: questions.items };
}) satisfies PageServerLoad;

export const actions: Actions = {
    subscribe: async (event) => {
        const form = await superValidate(event, emailSchema)
        console.log('POST', form);
        if (!form.valid) {
            return fail(400, { form })
        }
        
        return { form }
    }
};