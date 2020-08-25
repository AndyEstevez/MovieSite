import React, { Component } from 'react'
import {topRatedFilms_url, poster_url, api_key} from './config'; 
import '../css/TopRatedFilms.css';

export default class TopRatedFilms extends Component {
    constructor(){
		super();
		this.state = { topRatedFilms: [] };
	}

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

    getTopRatedFilms() {
		const films = this.state.topRatedFilms;

		return( 
			
				films.map(function(movie){
					return(
						<div className="card" key = {movie.title} > 
							<img src = {`${poster_url}${movie.poster_path}`}/>
							<div> { movie.vote_average + "/10" }</div>
							<div className="title"> { movie.title }</div>
							<div> { movie.release_date.substring(0, 4) }</div>
						</div>)
				})
			);
	}
}
