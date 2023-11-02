export const load = async ({ locals }) => {
    const { pb } = locals

    let authProviders
    let user;

    if (pb.authStore.isValid) {
        user = pb.authStore.model
    } else {
        authProviders = (await pb.collection('users').listAuthMethods()).authProviders;
    }

    return { authProviders, user }

};