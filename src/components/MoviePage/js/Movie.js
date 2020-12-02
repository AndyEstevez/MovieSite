import React, { useState, useEffect } from 'react';
import { poster_url, poster_url_large, profile_url, movieId_url, basic_url, api_key } from '../../config'; 
import movieStyle from '../css/Movie.module.css'


function Movie({movieId}) {
    // creating all the state hooks 
    // we need to display for a movie: Details on Movie, Similar Movies, Actors, and rest of Crew 
    const [Movie, setMovie] = useState([])
    const [Similar, setSimilar] = useState([])
    const [Actors, setActors] = useState([])
    const [Crew, setCrew] = useState([])


    useEffect(() => {
        const movieEndpoint = `${movieId_url}${movieId}?api_key=${api_key}&language=en-US`;
        fetchMovies(movieEndpoint)
    }, [])

    // All the API requests to set the state hooks to their specific response results: Movie, Crew, & Recommended
    const fetchMovies = (movieEndpoint) => {
        fetch(movieEndpoint)
            .then(details => details.json())
            .then(details => { console.log(details)
                setMovie(details)
                
                const recommendedEndpoint = `${basic_url}${movieId}/similar?api_key=${api_key}&language=en-US&page=1`;    
                fetch(recommendedEndpoint)
                    .then(similar => similar.json())
                    .then(similar => {
                        setSimilar(similar.results)
                    })

                const crewEndpoint = `${basic_url}${movieId}/credits?api_key=${api_key}`;
                fetch(crewEndpoint)
                    .then(crew => crew.json())
                    .then(crew => {
                        setActors(crew.cast.slice(0, 10))
                        setCrew(crew.crew)
                          
                    })
            })
    }

    console.log(Crew)  
    var dir = new Array();
    var writer = new Array();

    // function to find the director(s) of the movie
    function getDirector(Crew){
        Crew.map((element) => {
            if(element.department === "Directing" && element.job === "Director"){
                
                dir.push(element.name)
            }
           
        })
        return -1;
    }

    // function to find the writer(s) of the movie
    function getWriter(Crew){
        Crew.map((element) => {
            if(element.department === "Writing"){
                writer.push(element.name)
            }
        })
        return -1;
    }

    getDirector(Crew);
    getWriter(Crew);

        return (
            <div>
                <div className={movieStyle.movie_container}>
                    {/* Movie Details Section */}
                    <img className={movieStyle.poster} src={`${poster_url_large}${Movie.poster_path}`} alt={Movie.title} />
                    
                    <div className={movieStyle.movie_header}>
                        <div className={movieStyle.title}>{Movie.title}</div>
                        <div className={movieStyle.release}>{String(Movie.release_date).substring(0, 4)}</div>
                        <div className={movieStyle.runtime}>{Movie.runtime}m</div>
                        <div className={movieStyle.director}>Director: {dir.join(', ')}</div>
                        <div className={movieStyle.writer}>Writer: {writer.join(', ')}</div>
                    </div>
                    
                    <div className={movieStyle.movie_header2}>
                        <div className={movieStyle.rating}>{Movie.vote_average}/10</div>
                        <div className={movieStyle.votes}>| {Movie.vote_count} votes</div>
                    </div> 

                    <div>
                        <div className={movieStyle.overview}>{Movie.overview}</div>
                    </div>
                </div>

                {/* Actors Section */}
                <div className={movieStyle.actorHeader}>Billed Cast</div>

                <div className={movieStyle.actor_container}>
                    {/* Looping through the state hook 'Actors' to create a card for each actor */}
                    {Actors.map(function(actor){
                        return(
                            <div className={movieStyle.actor_card} key={actor.name}>
                                <img className={movieStyle.avatar} src={`${profile_url}${actor.profile_path}`} alt={actor.name}/>
                                <div className={movieStyle.actorName}>{actor.name}</div>
                                <div className={movieStyle.characterName}>{actor.character}</div>
                            </div>
                        )
                    })}
                            <div className={movieStyle.seeMore}>
                                <a href={`/movie/${movieId}/fullcredits`}>
                                    <div>See Full Cast </div>
                                </a>
                            </div>
                </div>

                {/* Recommended Movies Section */}
                <div className={movieStyle.recommended_container}>
                    <div className={movieStyle.recHeader}>Recommended Movies</div>
                <div className={movieStyle.recommended}>
                    {/* Looping through the state hook 'Similar' to create a card for each similar movie */}
                    {Similar.map(function(movie){
                        return(
                            <div className={movieStyle.recMovie} key={movie.title}>
                                <a href={`/movie/${movie.id}`}>
                                <img src={`${poster_url}${movie.poster_path}`} alt={movie.title} />
                                </a>
                                <div className={movieStyle.recommendedTitle}>{movie.title}</div>
                                <div>{movie.vote_average}</div>
                                <div>{movie.release_date.substring(0, 4)}</div>                
                            </div>
                        )
                    })}
                </div>
                </div>  
            </div>
        )
}


export default Movie;