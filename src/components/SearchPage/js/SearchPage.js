import React, { Component } from 'react';
import Searchbar from '../../Navbar/Searchbar';
import Results from './Results.js'
import "../css/SearchPage.css"

export default class SearchPage extends Component {
    render() {
        return (
            <div className="App">
                <Searchbar/>
                <div>Search Results</div>
                <Results />
            </div>
        )
    }
}
