const axios = require('axios');

export const getMovieDetail = movieId => ({
    type: 'GET_MOVIE_DETAIL',
    payload: axios.get(`/movie/${movieId}`)
});
