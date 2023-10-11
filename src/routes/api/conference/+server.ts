import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = (async () => {    
    const pb = new PocketBase(PUBLIC_API_URL);
    await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)
    const resultList = await pb.collection('Conference').getList(1, 50);

    return json(resultList)
  })