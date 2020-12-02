import { poster_url_large, trendingFilms_url, api_key } from '../../config'; 
import React, { useState, useEffect } from 'react';
import trendingCSS from '../css/TrendingResults.module.css';

var pageNum = 1;

function TrendingResults() {
    
    const [Films, setFilms] = useState([])

    useEffect(() => {
        const endpoint = `${trendingFilms_url}${api_key}&page=${pageNum}`;
        fetchMovies(endpoint)
        console.log("Trending Results page " + endpoint)
    }, [])


    // API request to get trending movies and set the hook to the response results
    const fetchMovies = (endpoint) =>  {

        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setFilms([...Films, ...response.results])
                console.log(response.results)
            })
    }

    // function for when the user clicks load more button and update the url to fetch the next page
    // increment the page starting at 1
    function loadMoreMovies(){
        //pageNum += 1;
        console.log("Page Number = " + pageNum)
        const endpoint = `${trendingFilms_url}${api_key}&page=${pageNum += 1}`;
        fetchMovies(endpoint)

    }

    return (<div>
                <div className={trendingCSS.container}>
                    {/* Looping through the state hook 'Films' 
                    // and create a card for each movie that holds: title, release date, poster, ratings*/}
                    { Films.map(function(movie){
          
                        return(
                            <div className={trendingCSS.card} key = {movie.title}> 
                   
                            <a href={`/movie/${movie.id}`}>
                            <img src = {`${poster_url_large}${movie.poster_path}`} alt={movie.title} className={trendingCSS.poster}/>
                            </a>
                            <div className={trendingCSS.rating} > { movie.vote_average + "/10" } </div>
                            <div className={trendingCSS.title}> { movie.title } </div>
                            <div className={trendingCSS.release}> { String(movie.release_date).substring(0, 4) } </div>
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