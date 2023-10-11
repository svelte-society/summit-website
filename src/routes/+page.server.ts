

export const load = (async ({ fetch }) => {
    const res = await fetch('/api/conference')
    const conferences = await res.json()
  
    const meta = {
        title: 'Test'
    }
  
    return { conferences: conferences.items };
  })