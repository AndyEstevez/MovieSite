import React, { Component } from 'react'
import Credits from './Credits';



export default class FullCreditsPage extends Component {
    constructor(props){
        super(props);
        this.state = { id: props.match.params.id}
    }
    render() {
        
        return (
            <div>
                <Credits movieId={this.state.id}/>
            </div>
        )
    }
}
