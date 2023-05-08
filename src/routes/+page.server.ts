import type { PageServerLoad, Actions } from './$types';
import { MARKETING_API_URL, MARKETING_API_KEY, HASH_SECRET, MAILERSEND_KEY } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import type { SpeakersResponse, TalksResponse, QuestionsResponse, SponsorsResponse } from '$lib/pocketbase-types';

type SpeakerEexpand = {
    speakers: SpeakersResponse[];
};

const emailSchema = z.object({
    email: z.string().email()
})

export const load = (async ({ fetch, request }) => {
    const [questionRes, sponsorsRes, sessionsRes, mcRes] = await Promise.all([
        fetch('/api/questions'),
        fetch('/api/sponsors'),
        fetch('/api/sessions'),
        fetch('/api/mcs'),
    ])
    const [questions, allSponsors, sessions, mcs]: [QuestionsResponse[], SponsorsResponse[], TalksResponse<SpeakerEexpand>[], SpeakersResponse[]] = await Promise.all([
        questionRes.json(),
        sponsorsRes.json(),
        sessionsRes.json(),
        mcRes.json()
    ])

    const platinum = allSponsors.filter(sponsor => sponsor.type === 'platinum')
    const gold = allSponsors.filter(sponsor => sponsor.type === 'gold')

    const sponsors = {
        platinum,
        gold: []
    }

    const meta = {
        title: 'Svelte Summit Spring 2023: The worlds biggest Svelte Conference',
        description: 'The worlds largest Svelte conference'
    }

    const form = await superValidate(request, emailSchema)
    return { form, questions, sponsors, sessions, mcs, meta };
}) satisfies PageServerLoad;

export const actions: Actions = {
    subscribe: async ({request, fetch}) => {
        const form = await superValidate(request, emailSchema)
        if (!form.valid) {
            return fail(400, { form })
        }

        const hash = await getSHA1Hash(form.data.email + HASH_SECRET)

        try {
            const res = await fetch(`${MARKETING_API_URL}/contacts`, {
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
                const res = await fetch(`${MARKETING_API_URL}/contacts?filter=${JSON.stringify({"data.hash": hash})}`, {
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