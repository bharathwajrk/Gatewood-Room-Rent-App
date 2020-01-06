/*
  Author: Bharathwaj RK
  Date : 15 Dec 2019
  This is a main app to search house for rent anywhere in India
*/
import React, { Component } from 'react';
import HomePage from './components/js/homePage';
import { BrowserRouter, Route } from 'react-router-dom';
import beAHost from './components/js/beAHost';
import beAHostOld from './components/js/beAHost-copy'
import help from './components/js/help';
import login from './components/js/login';
import signup from './components/js/signup';
import searchPage from './components/js/searchPage';
import { Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/beAHost' component={beAHostOld} />
            <Route path='/help' component={help} />
            <Route path='/login' component={login} />
            <Route path='/signup' component={signup} />
            <Route path='/searchPage/:searchLocation' component={searchPage} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;