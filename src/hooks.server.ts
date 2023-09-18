export async function handle({ event, resolve }) {
    if (!event.url.pathname.startsWith('/api')) {
        event.setHeaders({
            'X-Frame-Options': 'SAMEORIGIN',
            'X-Content-Type-Options': 'nosniff',
            'Content-Security-Policy': 'frame-src youtube.com https://www.youtube.com'
        })
    }
    
    return await resolve(event);
  }