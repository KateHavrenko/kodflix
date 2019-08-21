import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getMovies from './movies-get';

export default function Details({match}) {
    const [movie, setMovie] = useState('');
    const [message, setMessage] = useState('Hello, this will be the details page :)');
    let movieId = match.params.movieId;
    let movieName = getMovies().find((movie) => movie.id === movieId).name;

    useEffect(() => {
        setMovie(movieName);
        setTimeout(() => {
            setMessage('Comming soon!');
        }, 3000);
    });

    return (
        <div>
            <p>{movieName}</p>
            <p>{message}</p>
            <Link to='/'>Back to home</Link>
        </div>
    );
  
}