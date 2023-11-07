import { MARKETING_API_KEY, MARKETING_API_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals, params }) => {

    try {
        const id = await getIDFromHash(params.hash)
        const update_result = await verifyEmail(id)

    } catch (e) {
        console.error(e)
    }

    throw redirect(302, '/email-confirmed')
};

async function getIDFromHash(hash: string): Promise<string> {
  const res = await fetch(`${MARKETING_API_URL}/contacts?filter=${JSON.stringify({"data.hash": hash})}`, {
    headers: {
        'Authorization': 'Bearer ' + MARKETING_API_KEY,
        'Content-Type': 'application/json'
    },
  })
  const user_results = await res.json()
  const user = user_results.data[0]

  return user.id
}

async function verifyEmail(id: string): Promise<'success' | 'error'> {
  const res = await fetch(`${MARKETING_API_URL}/contacts/${id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': 'Bearer ' + MARKETING_API_KEY,
      'Content-Type': 'application/json'     
    },
    body: JSON.stringify({
      'data': {
        'data': {
          verified: true
        }
      }
    })
  })
  const update_result = await res.json()

  return 'success'
}