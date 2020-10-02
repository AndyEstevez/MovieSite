import { poster_url_large, topRatedFilms_url, api_key } from '../../config'; 
import React, { useState, useEffect } from 'react';
import topratedCSS from '../css/TopRatedResults.module.css';


var pageNum = 1;

function TopRatedResults() {
    
    const [Films, setFilms] = useState([])
    
    useEffect(() => {
        const endpoint = `${topRatedFilms_url}${api_key}&page=${pageNum}`;
        fetchMovies(endpoint)
        console.log("Trending Results page " + endpoint)
    }, [])

    const fetchMovies = (endpoint) =>  {

        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setFilms([...Films, ...response.results])
            })
    
          console.log(Films)
    }

    function loadMoreMovies(){
        console.log("Page Number = " + pageNum)
        const endpoint = `${topRatedFilms_url}${api_key}&page=${pageNum += 1}`;
        fetchMovies(endpoint)
    }

    return (<div>
                <div className={topratedCSS.container}>
                    { Films.map(function(movie){
          
                        return(
                            <div className={topratedCSS.card} key = {movie.title}> 
                   
                            <a href={`/movie/${movie.id}`}>
                            <img src = {`${poster_url_large}${movie.poster_path}`} alt={movie.title} className={topratedCSS.poster}/>
                            </a>
                            <div className={topratedCSS.rating} > { movie.vote_average + "/10" } </div>
                            <div className={topratedCSS.title}> { movie.title } </div>
                            <div className={topratedCSS.release}> { String(movie.release_date).substring(0, 4) } </div>
                            </div>
                        )
                    })}
                </div>	
                <div>
                <button className={topratedCSS.loadMore} onClick={loadMoreMovies}>Load More</button>
                </div>
            </div>
    )
}

export default TopRatedResults