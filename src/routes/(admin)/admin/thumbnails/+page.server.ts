export const load = async ({ fetch }) => {
    const res = await fetch('/api/sessions')
    let sessions = await res.json()

    sessions = sessions.map(session => {
        const speakers = session.expand.speakers.map((speaker) => {
            return {
                name: speaker.name,
                profile_url: `//wsrv.nl/?url=https://summit-api.sveltesociety.dev/api/files/speakers/${speaker.id}/` + speaker.profile + '&h=200&w=200&output=png'
            }
        })
        return {
            title: session.title,
            speakers
        }
    })
    
    const meta = {
        title: 'Admin Page - Thumbnail Generator',
        description: 'Svelte Summit Fall 2023 Admin Page'
    }
    
    return {
        sessions,
        meta
    }
};