import React, { Component } from 'react';
import "../css/HomePage.css"
import Searchbar from '../../Navbar/Searchbar';
import TrendingFilms from './TrendingFilms';
import TopRatedFilms from './TopRatedFilms';

export default class HomePage extends Component {
    render() {
        return (
            <div className = "App">
                <Searchbar/>
                <div className='trending'>What's Trending</div>
                <TrendingFilms/>
                <div className="topRated">Top Rated</div>
                <TopRatedFilms/>
            </div>
        )
    }
}
