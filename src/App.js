import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './components/Navbar/js/Searchbar';
import HomePage from './components/HomePage/js/HomePage';
import SearchPage from './components/SearchPage/js/SearchPage';
import MoviePage from './components/MoviePage/js/MoviePage';

function App(props) {
    
    return (
      <div>
        <SearchBar/>
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route exact path="/search/:searchQuery" component={SearchPage}/>
          <Route exact path="/movie/:id" component={MoviePage}/>
        </Switch>
      </div>
      );
    }




export default App;
