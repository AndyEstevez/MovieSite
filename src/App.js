import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/js/HomePage';
import SearchPage from './components/SearchPage/js/SearchPage'

function App() {
  
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/> 
          <Route exact path="/search" component={SearchPage}/>
        </Switch>
      </div>
      );
    }




export default App;
