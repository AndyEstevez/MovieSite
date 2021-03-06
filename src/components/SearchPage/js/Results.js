import React, { useState, useEffect } from 'react';
import { poster_url_large, search_url, api_key } from '../../config'; 
import searchResults from '../css/Results.module.css';

function Results({searchQuery}) {
    const [Searches, setSearch] = useState([])
    const query = searchQuery
    
    useEffect(() => {
        const endpoint = `${search_url}${api_key}&query=${query}&page=1`;
        fetchMovies(endpoint)
    }, [])

    // function to do an API request for searching based on what the user typed to the searchbar
    // and setting the state hook 'Searches' to the response results
    const fetchMovies = (endpoint) =>  {

        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setSearch([...Searches, ...response.results])
            })
        
            // console.log(endpoint);
            // console.log(query);
    }
    
    
    return (<div className={searchResults.container}>
       { Searches.map(function(movie){
          {/* Looping through the state hook 'Searches' and creating a card for each movie
        // each movie holds: title, release date, poster, ratings, and brief description of plot */}
            return(
                <div className={searchResults.card} key = {movie.title}> 
                     <div className={searchResults.break}></div>
                     <a href={`/movie/${movie.id}`}>
                    <img src = {`${poster_url_large}${movie.poster_path}`} alt={movie.title} className={searchResults.poster}/>
                    </a>
                    <div className={searchResults.rating}> { movie.vote_average + "/10" } </div>
                    <div className={searchResults.title}> { movie.title } </div>
                    <div className={searchResults.release}> { movie.release_date } </div>
                    <div className={searchResults.overview}> { movie.overview } </div>
                </div>
                )

        })}
        </div>	
    )
}

export default Results