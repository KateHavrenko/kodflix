import React, { useState, useEffect } from 'react';
import { Link, Redirect} from 'react-router-dom';
import getMovies from '../movies-get';
import './Details.css';

export default function Details({match}) {
    const [movie, setMovie] = useState('');
    //const [message, setMessage] = useState('Hello, this will be the details page :)');
    let movieId = match.params.movieId;
    let matchedMovie = getMovies().find((movie) => movie.id === movieId);


    useEffect(() => {
        setMovie(matchedMovie);
        // setTimeout(() => {
        //     setMessage('Comming soon!');
        // }, 3000);
    }, [matchedMovie]);

    if(movie === undefined) {
        return <Redirect to='/not-found'/>
    } else {
        return (
            <div className='details'>
                <h1>{movie.name}</h1>
                <div className='container'>
                    {/* <p>{message}</p> */}
                    <p className='description'>{movie.description}</p>
                    <img src={movie.img} title={movie.name} alt='something meaningful'/>
                </div>
                <Link to='/'>Back to home</Link>
            </div>
        );
    }
}