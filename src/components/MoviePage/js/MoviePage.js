import React, { Component } from 'react'
import Movie from "./Movie"
import "../css/MoviePage.css"

export default class MoviePage extends Component {

    // setting the state object 'id' to the url parameter of the movieID
    // we got the movieID from the user clicking on a movie which sends it to a unique page that the url shows the id
    constructor(props){
        super(props);
        this.state = { id: props.match.params.id };    
    }

    // send the state object 'id' as a prop to <Movie/> to handle creating the information for the movie
    render() {
        console.log(this.state.id)
        return (
            <div >
                <div className="moviepage">
                    <Movie movieId={this.state.id}/>
                </div>
            </div>
        )
    }
}
