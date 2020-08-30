import React, { useState, useEffect } from 'react';
import { poster_url_original, poster_url_large, movieId_url, api_key } from '../../config'; 
import movieStyle from '../css/Movie.module.css'

function Movie({movieId}) {
    const [Movie, setMovie] = useState([])


    useEffect(() => {
        const endpoint = `${movieId_url}${movieId}?api_key=${api_key}&language=en-US`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {

        fetch(endpoint)
            .then(response => response.json())
            .then(response => { console.log(response)
                setMovie(response)
            })
        
            console.log(endpoint);
           
    }

        const genresJSON = Movie.genres
        console.log(genresJSON)

        // genresJSON.forEach(element => {
        //     console.log(element.name)
        // })
       
        return (
            
            <div>
                <img className={movieStyle.poster} src={`${poster_url_large}${Movie.poster_path}`} alt={Movie.title} />
                <div className={movieStyle.title}>{Movie.title}</div>
                <div className={movieStyle.overview}>{Movie.overview}</div>
                <div className={movieStyle.runtime}>{Movie.runtime}m</div>
                <div className={movieStyle.rating}>{Movie.vote_average}/10</div>
                <div className={movieStyle.votes}>{Movie.vote_count} ratings</div>
                <div className={movieStyle.tagline}>Tagline: {Movie.tagline}</div>
                <div className={movieStyle.release}>{Movie.release_date}</div>
            </div>
        )
}


export default Movie;


