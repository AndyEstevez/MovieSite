import React, { useState, useEffect } from 'react';
import { poster_url, poster_url_large, movieId_url, similarFilms_url, api_key } from '../../config'; 
import movieStyle from '../css/Movie.module.css'

function Movie({movieId}) {
    const [Movie, setMovie] = useState([])
    const [Similar, setSimilar] = useState([])
    const [LoadingForMovie, setLoadingForMovie] = useState(true)

    useEffect(() => {
        const movieEndpoint = `${movieId_url}${movieId}?api_key=${api_key}&language=en-US`;
        fetchMovies(movieEndpoint)
    }, [])

    const fetchMovies = (movieEndpoint) => {
        fetch(movieEndpoint)
            .then(details => details.json())
            .then(details => { console.log(details)
                setMovie(details)

                const similarEndpoint = `${similarFilms_url}${movieId}/similar?api_key=${api_key}&language=en-US&page=1`;    
                fetch(similarEndpoint)
                    .then(similar => similar.json())
                    .then(similar => {
                       
                        setSimilar(similar.results)
                        setLoadingForMovie(false)
                    })
           
            })
    }

  
        return (
            <div>
                <img className={movieStyle.poster} src={`${poster_url_large}${Movie.poster_path}`} alt={Movie.title} />
                
                <div className={movieStyle.container}>
                    <div className={movieStyle.title}>{Movie.title}</div>
                    <div className={movieStyle.overview}>{Movie.overview}</div>
                    <div className={movieStyle.runtime}>{Movie.runtime}m</div>
                    <div className={movieStyle.rating}>{Movie.vote_average}/10</div>
                    <div className={movieStyle.votes}>{Movie.vote_count} ratings</div>
                    <div className={movieStyle.tagline}>Tagline: {Movie.tagline}</div>
                    <div className={movieStyle.release}>{Movie.release_date}</div>
                </div>

   
                <div>
                    <div className={movieStyle.header}>Recommended Movies</div>
                <div className={movieStyle.recommended}>
                    
                    {Similar.map(function(movie){
                        return(
                            <div key={movie.title}>
                                <a href={`/movie/${movie.id}`}>
                                <img src={`${poster_url}${movie.poster_path}`} alt={movie.title} />
                                </a>
                                <div>{movie.title}</div>
                                <div>{movie.vote_average}</div>
                                <div>{movie.release_date}</div>
                                
                            </div>
                        )
                    })}
                </div>
                </div>  
                
                
                
                
            </div>
        )
}


export default Movie;