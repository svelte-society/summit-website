export const load = async ({ locals }) => {
    const { pb } = locals
    const auth_methods = pb.collection('users').listAuthMethods();

    return { auth_methods}
};