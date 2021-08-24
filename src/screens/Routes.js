import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home/Home';
import Testes from './Testes/Testes';
import Teste from './Teste/Teste';
import Ranking from './Ranking/Ranking';
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
        <Route exact path="/teste">
          <Teste />
        </Route>
        <Route exact path="/ranking">
          <Ranking />
        </Route>
        <Route exact path="/sobre">
          <Sobre />
        </Route>
      </Switch>
    </Router>
  );
}
