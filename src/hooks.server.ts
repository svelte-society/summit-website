export async function handle({ event, resolve }) {

    event.setHeaders({
        'X-Frame-Options': 'SAMEORIGIN'
    })
   
    const response = await resolve(event);
    return response;
  }