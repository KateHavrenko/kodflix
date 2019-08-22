import React, { useState, useEffect } from 'react';
import { Link, Redirect} from 'react-router-dom';
import getMovies from './movies-get';

export default function Details({match}) {
    const [movie, setMovie] = useState('');
    const [message, setMessage] = useState('Hello, this will be the details page :)');
    let movieId = match.params.movieId;
    let matchedMovie = getMovies().find((movie) => movie.id === movieId);


    useEffect(() => {
        setMovie(matchedMovie);
        setTimeout(() => {
            setMessage('Comming soon!');
        }, 3000);
    }, []);

    if(movie === undefined) {
        return <Redirect to='/not-found'/>
    } else {
        return (
            <div>
                <p>{movie.name}</p>
                <p>{message}</p>
                <Link to='/'>Back to home</Link>
            </div>
        );
    }
}