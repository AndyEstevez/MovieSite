import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './components/Navbar/js/Searchbar';
import HomePage from './components/HomePage/js/HomePage';
import SearchPage from './components/SearchPage/js/SearchPage';
import MoviePage from './components/MoviePage/js/MoviePage';
import TrendingPage from './components/TrendingPage/js/TrendingPage';
import TopRatedPage from './components/TopRatedPage/js/TopRatedPage';
import FullCreditsPage from './components/FullCreditsPage/js/FullCreditsPage';

function App(props) {
    
    return (
      <div>
        <SearchBar/>
        <Switch> 
          {/* Routing to all possible pages with components using React Router Dom*/}
          <Route exact path="/" component={HomePage} /> 
          <Route exact path="/trending" component={TrendingPage}/>
          <Route exact path="/top-rated" component={TopRatedPage}/>
          <Route exact path="/search/:searchQuery" component={SearchPage}/>
          <Route exact path="/movie/:id" component={MoviePage}/>
          <Route exact path="/movie/:id/fullcredits" component={FullCreditsPage}/>
        </Switch>
      </div>
      );
    }




export default App;
