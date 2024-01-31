import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
    conference: z.string(),
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
    let talks;

    if (pb.authStore.isValid) {
        user = pb.authStore.model

        const filter = pb.filter(`speaker ~ {:id}`, { id: user.id })

        const { items } = await pb.collection('Talk').getList(1, 100, {
            filter
        });

        talks = items
    } else {
        authProviders = (await pb.collection('users').listAuthMethods()).authProviders;
    }

    return { authProviders, user, form, talks }

};

export const actions = {
    default: async ({ request, locals }) => {
        const form = await superValidate(request, schema, {
            
        });
        const { pb } = locals

        // Convenient validation check:
        if (!form.valid) {
            console.log('Invalid...')
            // Again, return { form } and things will just work.
            return fail(400, { form });
        }

        const data = {
            ...form.data,
            speaker: [pb.authStore.baseModel.id],
            status: 'reviewing'
        }

        const record = await pb.collection('Talk').create(data)

        return { form };
    }
};