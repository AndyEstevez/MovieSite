import React, { Component } from 'react';
import Results from './Results.js'
import "../css/SearchPage.css"

export default class SearchPage extends Component {
    render() {
        return (
            <div className="App">
                <div className="results">Search Results</div>
                <Results />
            </div>
        )
    }
}
