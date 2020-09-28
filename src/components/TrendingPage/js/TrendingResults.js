import { poster_url_large, trendingFilms_url, api_key } from '../../config'; 
import React, { useState, useEffect } from 'react';
import trendingCSS from '../css/TrendingResults.module.css';

const pageNum = 1;

function TrendingResults() {
    
    const [Films, setFilms] = useState([])
    
    useEffect(() => {
        const endpoint = `${trendingFilms_url}${api_key}&page=${pageNum}`;
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
       
        console.log("Load More")

    }

    return (<div>
                <div className={trendingCSS.container}>
                    { Films.map(function(movie){
          
                        return(
                            <div className={trendingCSS.card} key = {movie.title}> 
                   
                            <a href={`/movie/${movie.id}`}>
                            <img src = {`${poster_url_large}${movie.poster_path}`} alt={movie.title} className={trendingCSS.poster}/>
                            </a>
                            <div className={trendingCSS.rating} > { movie.vote_average + "/10" } </div>
                            <div className={trendingCSS.title}> { movie.title } </div>
                            <div className={trendingCSS.release}> { movie.release_date } </div>
                            </div>
                        )
                    })}
                </div>	
                <div>
                <button className={trendingCSS.loadMore} onClick={loadMoreMovies}>Load More</button>
                </div>
            </div>
    )
}

export default TrendingResults