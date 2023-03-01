import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true

export const GET = (async ({ url, fetch }) => {
    const res = await fetch('https://summit-api.sveltesociety.dev/api/collections/sponsor_packages/records')
   
  console.log('IM RUNNING!!')

    return new Response(res.body);
  }) satisfies RequestHandler;