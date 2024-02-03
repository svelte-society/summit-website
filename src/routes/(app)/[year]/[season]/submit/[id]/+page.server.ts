import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import type { TalkResponse } from '$lib/pocketbase-types.js'

const schema = z.object({
    id: z.string(),
    conference: z.string(),
    title: z.string(),
    description: z.string(),
    format: z.enum(['regular', 'lightning']),
    level: z.enum(['beginner', 'intermediate', 'advanced']),
    notes: z.string()
  });;

export const load = async ({ params, locals }) => {
    const { id } = params
    const { pb } = locals

    
    let talk;
    
    if (pb.authStore.isValid) {
        talk = await pb.collection('Talk').getFirstListItem<TalkResponse>(pb.filter(`id = {:id}`, { id }))
    } else {
        redirect(302, '/')
    }

    const form = await superValidate(talk, schema);

    return { talk, form }

};

export const actions = {
    default: async ({ request, locals, params }) => {
        const form = await superValidate(request, schema, {
            
        });
        const { pb } = locals

        if (!form.valid) {
            console.log('Invalid...')
            return fail(400, { form });
        }

        const record = await pb.collection('Talk').update(params.id, form.data)
        
        return { form }
    }
};