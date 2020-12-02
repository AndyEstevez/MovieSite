import React, { Component } from 'react'
import Credits from './Credits';



export default class FullCreditsPage extends Component {
    // using the params of the movieId to set the state object 'id'
    constructor(props){
        super(props);
        this.state = { id: props.match.params.id}
    }
    render() {
        // sending the state as a prop for the component '<Credits/> to handle it
        return (
            <div>
                <Credits movieId={this.state.id}/>
            </div>
        )
    }
}
