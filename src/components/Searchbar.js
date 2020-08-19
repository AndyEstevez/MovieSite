import React, { Component } from 'react';
import { NavMenuItems }  from './NavBarMenuItems';
import "../css/NavigationBar.css";

class SearchBar extends Component {
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
   					  <input type="text" placeholder="Search" className="searchbar" id="userInput"/>
              <div className="search-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
            </div>
    			</ul>
    			
    		</nav>
    	
      );
    }
}



export default SearchBar;









