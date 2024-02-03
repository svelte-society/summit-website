import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const create_talk_schema = z.object({
    conference: z.string(),
    title: z.string(),
    description: z.string(),
    format: z.enum(['regular', 'lightning']).default(''),
    level: z.enum(['beginner', 'intermediate', 'advanced']).default(''),
    notes: z.string()
  });

const delete_talk_schema = z.object({
    id: z.string()
  });
  

export const load = async ({ locals }) => {
    const createForm = await superValidate(create_talk_schema);
    const deleteForm = await superValidate(delete_talk_schema);
    const { pb } = locals

    if (pb.authStore.isValid) {
        const { id } = pb.authStore.model
        const filter = pb.filter(`speaker ~ {:id}`, { id: id })

        const { items } = await pb.collection('Talk').getList(1, 100, {
            filter
        });

        return { talks: items, createForm, deleteForm }
    }
    return {}
};

export const actions = {
    submit: async ({ request, locals }) => {
        const form = await superValidate(request, create_talk_schema, {
            
        });
        const { pb } = locals

        if (!form.valid) {
            return fail(400, { form });
        }

        const data = {
            ...form.data,
            speaker: [pb.authStore.baseModel.id],
            status: 'reviewing'
        }

        const record = await pb.collection('Talk').create(data)

        return { form };
    },
    delete: async ({ request, locals }) => {
        const form = await superValidate(request, delete_talk_schema, {
            
        });
        const { pb } = locals

        if (!form.valid) {
            return fail(400, { form });
        }

        const record = await pb.collection('Talk').delete(form.data.id)

        return { form };
    }
};