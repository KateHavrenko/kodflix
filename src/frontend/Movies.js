 import React from 'react';
import Movie from './Movie';
import getMovies from './movies-get';

export default function Movies() {
    return (
        <div className='movies'>
            <div className='container'>
                {
                    getMovies().map(stack => (
                        <Movie key={stack.id} id={stack.id} name={stack.name} img={stack.img} />
                    ))
                }
            </div>
        </div>
    );
}



