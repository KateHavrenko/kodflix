//import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import Movie from './Movie';
import getMovies from './movies-get';



export default function Movies() {

    useEffect(() => {
        fetch('/rest/shows')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
        });
    }, []);


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



