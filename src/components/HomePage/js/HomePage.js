import React, { Component } from 'react';
import "../css/HomePage.css"
import TrendingFilms from './TrendingFilms';
import TopRatedFilms from './TopRatedFilms';

export default class HomePage extends Component {
    render() {
        return (
            <div className = "App">
                <div className='trending'>What's Trending</div>
                <TrendingFilms/>
                <div className="topRated">Top Rated</div>
                <TopRatedFilms/>
            </div>
        )
    }
}
