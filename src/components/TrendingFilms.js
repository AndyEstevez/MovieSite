import React, { Component } from "react";

class TrendingFilms extends React.Component{
	componentDidMount(){
		const apikey = "3522ddec15ed63abf2e2a608c6123c76";
		const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=";
		const poster_url = "https://image.tmdb.org/t/p/w154";

		const full_url = url + apikey;

		fetch(full_url)
			.then((response) => response.json())
			.then((data) => console.log('This is your data', data));
	}

	render() {
		return <h1>API Request was successful</h1>;
	}
}

export default TrendingFilms;






