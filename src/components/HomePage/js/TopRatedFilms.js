import React, { Component } from 'react'
import {topRatedFilms_url, poster_url, api_key} from '../../config'; 
import '../css/TopRatedFilms.css';

export default class TopRatedFilms extends Component {
    constructor(){
		super();
		this.state = { topRatedFilms: [] };
	}

	// using API request for getting top rated films 
	// setting the state of "topRatedFilms" to the results from the request
    componentDidMount(){
		
		const full_url = topRatedFilms_url + api_key;

		const request = async () => {
			const response = await fetch(full_url)
				.then(response => response.json())
				.then((data) => this.setState({ topRatedFilms: data.results.slice(0, 20)}));
		}

		request();
	}

    render() {
        const getFunction = this.getTopRatedFilms();
		return <div className="container">{ getFunction }</div>;
    }

	// function to create an object that contains a list of movies 
	// Each movie holds: poster, ratings, title, release date
    getTopRatedFilms() {
		const films = this.state.topRatedFilms;

		return( 
			// looping through the state object "topRatedFilms" for each index of movie & creating a card for it
				films.map(function(movie){
					return(
						<div className="card" key = {movie.title}> 
							<a href={`/movie/${movie.id}`} >
							<img src = {`${poster_url}${movie.poster_path}`} alt={movie.title}/>
							</a>
							<div> { movie.vote_average + "/10" }</div>
							<div className="title"> { movie.title }</div>
							<div> { movie.release_date.substring(0, 4) }</div>
						</div>)
				})
			)
	}
}
