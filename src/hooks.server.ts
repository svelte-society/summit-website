export async function handle({ event, resolve }) {
    event.setHeaders({
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Content-Security-Policy': 'frame-src youtube.com https://www.youtube.com'
    })
    
    return await resolve(event);
  }