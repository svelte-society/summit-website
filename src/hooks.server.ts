import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  const route = event.url

  let start = performance.now()
  const response = await resolve(event)
  let end = performance.now()

  let responseTime = end - start

  if (responseTime > 2000) {
    console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`)
  }

  if (responseTime < 1000) {
    console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`)
  }

  return response
}
