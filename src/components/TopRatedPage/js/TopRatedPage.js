import React, { Component } from 'react';
import TopRatedResults from './TopRatedResults';
import '../css/TopRatedPage.css'

export default class TopRatedPage extends Component {
    render() {
        return (
            <div className="App">
                <TopRatedResults />
            </div>
        )
    }
}
