import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies, locals, url }) => {
    const { pb } = locals
    pb.authStore.clear();

    cookies.delete('pb_auth', { path: '/' });

    redirect(302, url.searchParams.get('referrer') || '/')
};