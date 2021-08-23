import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Home/Home';
import Testes from './Testes/Testes';
import Sobre from './Sobre/Sobre';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Testes} path="/testes" exact />
      <Route component={Sobre} path="/sobre" exact />
    </BrowserRouter>
  );
}
