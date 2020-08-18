import React, { Component } from "react";
import '../css/TrendingFilms.css';

class TrendingFilms extends React.Component{
	constructor(){
		super();
		this.state = { trendingFilms: [] };
	}

	componentDidMount(){
		const apikey = "3522ddec15ed63abf2e2a608c6123c76";
		const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=";
		const poster_url = "https://image.tmdb.org/t/p/w154";
		const full_url = url + apikey;

		const request = async () => {
			const response = await fetch(full_url)
				.then(response => response.json())
				.then((data) => this.setState({ trendingFilms: data.results.slice(0, 10)}));
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
						<div className="card" key = {movie.title} > 
							<img src = {"https://image.tmdb.org/t/p/w154" + movie.poster_path} />
							<div> { movie.vote_average + "/10" }</div>
							<div> { movie.title }</div>
							<div> { movie.release_date.substring(0, 4) }</div>
						</div>)
				})
			);
	}
}

export default TrendingFilms;






