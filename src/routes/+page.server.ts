import { MARKETING_API_URL, MARKETING_API_KEY, HASH_SECRET, MAILERSEND_KEY } from '$env/static/private';
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

        const hash = await getSHA1Hash(form.data.email + HASH_SECRET)

        try {
            const res = await event.fetch(`${MARKETING_API_URL}/contacts`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + MARKETING_API_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'data': {
                        'data': {
                            hash,
                            verified: false
                        },
                        'email': form.data.email
                    }
                })
            })

            const data = await res.json()

            if (!data.errors) {
                const res = await event.fetch(`${MARKETING_API_URL}/contacts?filter=${JSON.stringify({"data.hash": hash})}`, {
                    headers: {
                        'Authorization': 'Bearer ' + MARKETING_API_KEY,
                        'Content-Type': 'application/json'
                    },
                })
    
                const user_results = await res.json()
                const user = user_results.data[0]
    
                if (user?.data?.verified) {
                    return { form }
                }

                const send_email_res = await fetch('https://api.mailersend.com/v1/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization': 'Bearer ' + MAILERSEND_KEY
                    },
                    body: JSON.stringify({
                        'to': [
                            {
                                'email': user.email
                            }
                        ],
                        'variables': [
                            {
                                'email': user.email,
                                'substitutions': [
                                    {
                                        'var': 'email.hash',
                                        'value': hash
                                    }
                                ]
                            }
                        ],
                        'template_id': 'v69oxl5895rl785k'
                    })
                });
    
                const send_email = await send_email_res.json()
    
            }
        } catch (error) {
            console.error(error)
        }





        return { form }
    }
};

async function getSHA1Hash(input: string) {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-1", textAsBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray
      .map((item) => item.toString(16).padStart(2, "0"))
      .join("");
    return hash;
  };