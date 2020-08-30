import React, { Component } from 'react'
import Movie from "./Movie"
import "../css/MoviePage.css"

export default class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state = { id: props.match.params.id };    
        
    }
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
