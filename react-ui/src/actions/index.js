// json-server --watch db.json --port 3004

export function getArtists() {
    // Production
    //const request = fetch(`/api`, { method: 'GET' })

    const request = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=82e0e5a56b04994581c0700e5d61a2e5`, { method: 'GET' })
        .then(response => response.json());
    return {
        type: 'GET_ARTISTS',
        payload: request
    }
}


export function getMovies() {
    // Production
    //const request = fetch(`/api`, { method: 'GET' })
    
    const request = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=82e0e5a56b04994581c0700e5d61a2e5`, { method: 'GET' })
        .then(response => response.json());
    return {
        type: 'GET_MOVIES',
        payload: request
    }
}
