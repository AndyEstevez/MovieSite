import React, { Component } from 'react';
import TrendingResults from './TrendingResults';
import '../css/TrendingPage.css'

export default class TrendingPage extends Component {
    render() {
        return (
            <div className="App">
                <TrendingResults />
            </div>
        )
    }
}
