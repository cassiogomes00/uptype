import { combineReducers, createStore } from 'redux';

import testesReducer from './Testes/Testes.reducer';
import testeReducer from './Teste/Teste.reducer';
import historicoReducer from './Historico/Historico.reducer';

const rootReducer = combineReducers({
  testes: testesReducer,
  teste: testeReducer,
  historico: historicoReducer,
});
const store = createStore(rootReducer);

export default store;
