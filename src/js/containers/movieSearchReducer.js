const defaultState = {
    movie: '',
    listOfMovies: []
};

export default function MovieSearchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'UPDATE_SEARCH_BAR' : {
            return {
                ...state,
                movie: payload.movie
            };
        }
        case 'GET_MOVIE_FULFILLED' : {
            return {
                ...state,
                listOfMovies: payload.data.Search

            };
        }
        default: {
            return state;
        }
    }
}
