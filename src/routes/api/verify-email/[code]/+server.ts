import { MARKETING_API_KEY, MARKETING_API_URL } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch, params }) => {
  
    console.log(params)

    // fetch(`${MARKETING_API_URL}/contacts`, {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Bearer ' + MARKETING_API_KEY,
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         'data': {
    //             'data': {
    //                 verified: false,
    //             },
    //             'email': form.data.email
    //         }
    //     })

    return new Response('.body');
  }) satisfies RequestHandler;