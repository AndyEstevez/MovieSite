import React, { Component } from 'react';
import { NavMenuItems }  from './NavBarMenuItems';
import "../css/NavigationBar.css";

class SearchBar extends Component {
	state = {
		searchQuery: null
	}

	// function to handle when the user types into searchbar &
	// set the state to the state object 'searchQuery'
	handleChange = (e) => {
		this.setState({searchQuery: e.target.value}, () => console.log('state', this.state));
	}

	// function for when the user decided to press the 'Enter' key on keyboard &
	// sends to a new page from the query and displays the results from said query
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
					   {/* looping through the imported list of data to create the navbar */}
   					{ NavMenuItems.map((item, index) => {
   						return (
   							<li key={ index }>
   								<a className={ item.className } href={ item.url }> { item.label }</a>
   							</li>
   							)})}  		

						{/* Creating the searchbar to allow the user to type & search for a movie */}
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









