import React, { Component } from 'react';
import Results from './Results.js'
import "../css/SearchPage.css"

export default class SearchPage extends Component {
    constructor(props){
		super(props);
		this.state = { result: props.match.params.searchQuery };
	}

    
    render() {
        console.log(this.state)
        return (
            <div className="App">
                <div className="results">Search Results</div>
                <Results searchQuery={this.state.result}/>
            </div>
        )
    }
}
