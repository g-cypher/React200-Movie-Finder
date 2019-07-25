import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

import {
    updateSearchBar,
    getMovie
} from './movieSearchActions';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleGetMovie = this.handleGetMovie.bind(this);
    }
handleGetMovie() {
    const { dispatch, movie } = this.props;
    dispatch(getMovie(movie));
}

handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchBar(value));
}

render() {
    const { movie, listOfMovies } = this.props;
    console.log(listOfMovies);
    return (
        <div>
            <h1>Movie Finder</h1>
            <div className='input-group mb-3'>
                    <input type='text' className='form-control' placeholder='Enter Movie' aria-describedby='basic-addon2' value={ movie } onChange={ this.handleSearchInput } />
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='button' onClick={ this.handleGetMovie }>Go!</button>
                    </div>
            </div> 
        
            { 
                listOfMovies.map(film => (
                    <div className='card' key={ film.imdbId }>
                        <div className='card-body row'>
                            <div className='col-4'>
                                <img className='img-fluid' src={ film.Poster } />
                            </div>
                            <div className='col-8'>
                                <h3>{ film.Title }</h3>
                                <h5>{ film.Year }</h5>
                                <hr />
                                <h5 id='filmType'>{ film.Type }</h5>
                                <Link to={ `/movie/${film.imdbID}` } className='btn btn-primary align-self-end'>More Information</Link>
                            </div>
                        </div>
                    </div>

            ))
            }
        </div>
    );
}
}
function mapStoreToProps(store) {
    return {
        movie: store.movieSearchData.movie,
        listOfMovies: store.movieSearchData.listOfMovies
    };
}
export default connect(mapStoreToProps)(MovieSearchContainer);
