export const load = (({ setHeaders }) => {
    setHeaders({
        'X-Frame-Options': 'SAMEORIGIN'
    })
})