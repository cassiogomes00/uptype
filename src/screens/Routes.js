import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home/Home';
import Testes from './Testes/Testes';
import Sobre from './Sobre/Sobre';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/testes">
          <Testes />
        </Route>
        <Route exact path="/sobre">
          <Sobre />
        </Route>
      </Switch>
    </Router>
  );
}
