import PocketBase from 'pocketbase';
import { PUBLIC_API_URL } from '$env/static/public';
import { GITHUB_AUTH_URL } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';
import type { TypedPocketBase } from '$lib/pocketbase-types';
import { redirect, type Handle } from '@sveltejs/kit';

const protect_routes: Handle = async ({ event, resolve }) => {
	const { url, locals } = event;

	if (url.pathname.startsWith('/admin')) {
		if (!locals.user) throw redirect(302, '/');
		if (locals.user.role !== 'admin') {
			redirect(302, '/');
		}
	}

	return resolve(event);
};

const add_pocketbase_client: Handle = async ({ event, resolve }) => {
	const pb: TypedPocketBase = new PocketBase(PUBLIC_API_URL);
	event.locals.pb = pb;

	let auth = event.cookies.get('pb_auth');
	pb.authStore.loadFromCookie('pb_auth=' + auth);

	try {
		if (pb.authStore.isValid) {
			await pb.collection('users').authRefresh();
			event.locals.user = pb.authStore.record;
		}
	} catch (error) {
		pb.authStore.clear();
		event.locals.user = null;
	}

	return resolve(event);
};

const oauth: Handle = async ({ event, resolve }) => {
	const { url, locals } = event;

	try {
		if (url.pathname.endsWith('submit')) {
			const { code, codeVerifier } = Object.fromEntries(url.searchParams);
			if (!code) {
				return resolve(event);
			}

			const pb: TypedPocketBase = locals.pb;

			const authData = await pb
				.collection('users')
				.authWithOAuth2Code('github', code, codeVerifier, GITHUB_AUTH_URL, {
					role: 'user'
				});

			const name = authData?.meta?.name ?? '';
			const avatar = authData?.meta?.avatarUrl ?? '';
			const bio = authData?.meta?.bio ?? '';
			const twitter = authData?.meta?.twitter ?? '';

			pb.collection('users').update(authData.record.id, {
				name,
				avatar,
				bio,
				twitter,
				role: 'user'
			});

			const cookie = JSON.stringify({ token: pb.authStore.token, model: pb.authStore.model });
			event.cookies.set('pb_auth', cookie, {
				path: '/'
			});
		}
	} catch (error) {
		return resolve(event);
	}

	return resolve(event);
};

export const handle = sequence(add_pocketbase_client, oauth, protect_routes);
