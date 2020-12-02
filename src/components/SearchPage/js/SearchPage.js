import React, { Component } from 'react';
import Results from './Results.js'
import "../css/SearchPage.css"

export default class SearchPage extends Component {
    // set the state object 'result' to the value in the url which is the searchQuery 
    constructor(props){
		super(props);
		this.state = { result: props.match.params.searchQuery };
	}

    // sending the state as a prop to the another component to handle it
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
