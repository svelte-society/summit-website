export const load = async ({ locals }) => {
    const { pb } = locals

    if (pb.authStore.isValid) {
        return { user: pb.authStore.model}
    } else {
        return { authProviders: (await pb.collection('users').listAuthMethods()).authProviders }
    }
};