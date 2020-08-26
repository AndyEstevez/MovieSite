import React from "react";
import '../css/TrendingFilms.css';
import {trendingFilms_url, poster_url, api_key} from '../../config'; 

class TrendingFilms extends React.Component{
	constructor(){
		super();
		this.state = { trendingFilms: [] };
	}

	componentDidMount(){
		
		const full_url = trendingFilms_url + api_key;

		const request = async () => {
			const response = await fetch(full_url)
				.then(response => response.json())
				.then((data) => this.setState({ trendingFilms: data.results.slice(0, 20)}));
		}

		request();
	}

	render() {
		const getFunction = this.getTrendingFilms();
		return <div className="container">{ getFunction }</div>;
	}

	
	getTrendingFilms() {
		const films = this.state.trendingFilms;

		return( 
			
				films.map(function(movie){
					return(
						<div className="card" key = {movie.title}> 
							<a href={`/movie/${movie.id}`} >
							<img src = {`${poster_url}${movie.poster_path}`} alt={movie.title} /></a>
							<div> { movie.vote_average + "/10" }</div>
							<div className="title"> { movie.title }</div>
							<div> { movie.release_date.substring(0, 4) }</div>
						</div>)
				})
			);
	}
}


export default TrendingFilms;






