import type { PageServerLoad } from './$types';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const prerender = true

const emailSchema = z.object({
    email: z.string().email()
})

export const load = (async ({ request }) => {
    const form = await superValidate(request, zod(emailSchema))
    return { form };
}) satisfies PageServerLoad;
