import React, { Component } from 'react';
import { NavMenuItems }  from './NavBarMenuItems';

import "../css/NavigationBar.css";
import { Link } from 'react-router-dom';

class SearchBar extends Component {
	state = {
		searchQuery: null
	}

	handleChange = (e) => {
		this.setState({searchQuery: e.target.value}, () => console.log('state', this.state));
	}

	handleKeyPress(e){
		if(e.charCode === 13){
			window.location.href=`/search/${this.state.searchQuery}`;
		}
	}
// this.handleKeyPress.bind(this)
 	render(){
    	return (
   			<nav className="nav-items">
   				<ul className="nav-menu">
   					{ NavMenuItems.map((item, index) => {
   						return (
   							<li key={ index }>
   								<a className={ item.className } href={ item.url }> { item.label }</a>
   							</li>
   							)})}  		
            				<div className="searchholder">
									 <input type="text" placeholder="Search" className="searchbar" id="userInput" 
									 onChange={this.handleChange} onKeyPress={this.handleKeyPress.bind(this) }/>
              						<div className="search-btn">
                						<i className="fa fa-search" aria-hidden="true"  onClick={event => window.location.href=`/search/${this.state.searchQuery}`} ></i>
              						</div>
            				</div>
    			</ul>
    		</nav>
      	);
    }
}



export default (SearchBar);









