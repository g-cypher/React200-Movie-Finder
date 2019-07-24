const axios = require('axios');

export function updateSearchBar(movie) {
    return {
        type: 'UPDATE_SEARCH_BAR',
        payload: { movie }
    };
}
export const getMovie = movie => ({
    type: 'GET_MOVIE',
    payload: axios.get(`/movies/${movie}`)
});
