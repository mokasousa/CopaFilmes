import React, { Component } from 'react';
import { Route } from 'react-router';
import { SelectMovies } from './components/SelectMovies';
import { Results } from './components/Results';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <div className="app">
          <Route exact path="/" component={SelectMovies} />
          <Route path='/resultados' component={Results} />
        </div>
    );
  }
}
