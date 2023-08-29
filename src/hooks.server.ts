export async function handle({ event, resolve }) {   
    const response = await resolve(event);
    response.headers.set('x-frame-otions', 'sameorigin')
    return response;
  }