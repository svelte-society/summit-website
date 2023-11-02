import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals, params }) => {
    const { pb } = locals
    const { service, redirect } = params
    const { code, state } = Object.fromEntries(url.searchParams)

    const { authProviders } = await pb.collection('users').listAuthMethods();
    const [provider] = authProviders.filter(provider => provider.name === service)
    console.log(provider)
    console.log(state)
    const authData = await pb.collection('users').authWithOAuth2Code(
        service,
        code,
        provider.codeVerifier,
        url.origin + '/' + redirect
    )

    console.log(authData)

    // const name = authData?.meta?.name ?? '';
    // const avatarUrl = authData?.meta?.avatar ?? '';

    // await pb.collection('users').update(authData.record.id, {
    //     name,
    //     avatarUrl
    // });

    return new Response('Hello!');
};