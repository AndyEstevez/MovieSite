import React, { useState, useEffect } from 'react'
import { poster_url_large, search_url, api_key } from '../../config'; 
import '../css/Results.css'
function Results() {

    const [Searches, setSearch] = useState([])

    const query = "The"

    useEffect(() => {
        const endpoint = `${search_url}${api_key}&query=${query}&page=1`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) =>  {

        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setSearch([...Searches, ...response.results])
            })
        
            console.log(endpoint);
    }
    
    
    return (<div className="container">
       { Searches.map(function(movie){
          
            return(
                <div className="card" key = {movie.title}> 
                     <div className="break"></div>
                    <img src = {`${poster_url_large}${movie.poster_path}`} alt={movie.title} className="poster"/>
                    <div className="rating"> { movie.vote_average + "/10" } </div>
                    <div className="title"> { movie.title } </div>
                    <div className="release"> { movie.release_date } </div>
                    <div className="overview"> { movie.overview } </div>
                </div>
                )

        })}
        </div>
				
				
    )
    
}



export default Results
