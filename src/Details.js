import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getMovies from './movies-get';

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        let movie = getMovies().find((movie) => movie.id === movieId);
        this.setState({
            movie: movie
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.movie.name}</p>
                <Link to='/'>Back to home</Link>
            </div>
        );
    }
  
}