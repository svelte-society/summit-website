import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals, params }) => {
    const { pb } = locals
    const { service, redirect } = params
    const { code, state } = Object.fromEntries(url.searchParams)

    const { authProviders } = await pb.collection('users').listAuthMethods();
    const [provider] = authProviders.filter(provider => provider.name === service)
    const authData = await pb.collection('users').authWithOAuth2Code(
        service,
        code,
        provider.codeVerifier,
        url.origin + '/' + redirect
    )

    const name = authData?.meta?.name ?? '';
    const avatarUrl = authData?.meta?.avatar ?? '';

    await pb.collection('users').update(authData.record.id, {
        name,
        avatarUrl
    });
};