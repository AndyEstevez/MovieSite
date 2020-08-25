import React, { Component } from 'react';
import './css/App.css';
import Searchbar from './components/Navbar/Searchbar.js'
import TrendingFilms from './components/TrendingFilms.js'
import TopRatedFilms from './components/TopRatedFilms.js'

function App() {
  
    return (
      <div className="App">
        <Searchbar/>
        <div className='trending'>What's Trending</div>
          <TrendingFilms/>
        <div className="topRated">Top Rated</div>
          <TopRatedFilms/>
      </div>
      );
    }




export default App;
