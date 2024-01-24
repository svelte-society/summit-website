import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
    title: z.string(),
    description: z.string(),
    format: z.enum(['regular', 'lightning']),
    level: z.enum(['beginner', 'intermediate', 'advanced']),
    notes: z.string()
  });
  

export const load = async ({ locals }) => {
    const form = await superValidate(schema);
    const { pb } = locals

    let authProviders
    let user;

    if (pb.authStore.isValid) {
        user = pb.authStore.model
    } else {
        authProviders = (await pb.collection('users').listAuthMethods()).authProviders;
    }

    return { authProviders, user, form }

};

export const actions = {
    default: async ({ request, locals }) => {
        const form = await superValidate(request, schema);
        const { pb } = locals

        console.log(pb.authStore.id)

        console.log('Form submitted...')

        // Convenient validation check:
        if (!form.valid) {
            console.log('Invalid...')
            // Again, return { form } and things will just work.
            return fail(400, { form });
        }

        console.log('Valid!')

        return { form };
    }
};