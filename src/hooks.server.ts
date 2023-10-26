import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { POCKETBASE_PASSWORD, POCKETBASE_USERNAME } from '$env/static/private';
const pb = new PocketBase(PUBLIC_API_URL);
await pb.admins.authWithPassword(POCKETBASE_USERNAME, POCKETBASE_PASSWORD)

export async function handle({ event, resolve }) {
    event.setHeaders({
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Content-Security-Policy': 'frame-src youtube.com https://www.youtube.com'
    })
    event.locals.pb = pb
    
    return await resolve(event);
  }