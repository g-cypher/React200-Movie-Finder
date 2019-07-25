import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    getMovieDetail
} from './movieDetailActions';

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getMovieDetail(this.props.match.params.id));
    }
    render() {
        const { Title, Year, Runtime, Genre, Plot, Awards, Metascore, imdbRating, Poster } = this.props;
        return(
            <div>
                <h1>Movie Detail Container</h1>
                <div className='row'>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={ Poster } />
                    </div>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>
                                Movie Details
                            </div>
                            <div className='card-body'>
                                <h3>{ Title }</h3>
                                <span>{ Year }    </span>
                                <span>{ Runtime }    </span>
                                <span>{ Genre }    </span>
                                <h6>{ Plot }</h6>
                                <h6>{ Awards }</h6>
                                <h6>Metascore: { Metascore }</h6>
                                <h6>IMDB: { imdbRating }</h6>
                                <Link to={ '/' } className='btn btn-primary float-right'>Go back</Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}
function mapStoreToProps(store) {
    return {
        Title: store.movieDetailData.Title,
        Year: store.movieDetailData.Year,
        Runtime: store.movieDetailData.Runtime,
        Genre: store.movieDetailData.Genre,
        Plot: store.movieDetailData.Plot,
        Awards: store.movieDetailData.Awards,
        Metascore: store.movieDetailData.Metascore,
        imdbRating: store.movieDetailData.imdbRating,
        Poster: store.movieDetailData.Poster
    };
}
export default connect(mapStoreToProps)(MovieDetailContainer);
