import React, { Component } from 'react';
import './css/App.css';
import Searchbar from './components/Searchbar.js'
import TrendingFilms from './components/TrendingFilms.js'

function App() {
  
    return (
      <div className="App">
        <Searchbar/>
        <div className='main'><TrendingFilms/></div>
      </div>
      );
    }




export default App;
