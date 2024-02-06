import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';

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
        const createForm = await superValidate(request, create_talk_schema, {
            
        });
        const { pb } = locals

        if (!createForm.valid) {
            return fail(400, { createForm });
        }

        const data = {
            ...createForm.data,
            speaker: [pb.authStore.baseModel.id],
            status: 'reviewing'
        }

        const record = await pb.collection('Talk').create(data)

        return message(createForm, 'Talk submitted successfully!')
    },
    delete: async ({ request, locals }) => {
        const deleteForm = await superValidate(request, delete_talk_schema, {
            
        });
        const { pb } = locals

        if (!deleteForm.valid) {
            return fail(400, { deleteForm });
        }

        const record = await pb.collection('Talk').delete(deleteForm.data.id)

        return message(deleteForm, 'Talk deleted successfully!')
    }
};