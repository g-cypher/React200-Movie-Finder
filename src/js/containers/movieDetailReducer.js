const defaultState = {
    Title: '',
    Year: '',
    Runtime: '',
    Genre: '',
    Plot: '',
    Awards: '',
    Metascore: '',
    imdbRating: '',
    Poster: ''
};

export default function MovieDetailReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'GET_MOVIE_DETAIL_FULFILLED' : {
            return {
                ...state,
            Title: payload.data.Title,
            Year: payload.data.Year,
            Runtime: payload.data.Runtime,
            Genre: payload.data.Genre,
            Plot: payload.data.Plot,
            Awards: payload.data.Awards,
            Metascore: payload.data.Metascore,
            imdbRating: payload.data.imdbRating,
            Poster: payload.data.Poster
            };
        }
        default: {
            return state;
        }
    }
}
