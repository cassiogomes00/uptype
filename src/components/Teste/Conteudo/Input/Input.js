import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { digitar } from '../../../../store/Teste/Teste.actions';

import Wrapper from './Input.styled';

export default function Input() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.teste;
  });

  const handleTyping = (event) => {
    const valor = event.target.value;
    let inicio = state.inicio;
    if (state.inicio === null) {
      inicio = new Date();
    }

    const fim = new Date();
    dispatch(digitar(valor, inicio, fim));
  };

  return (
    <Wrapper
      className="form-control"
      type="text"
      placeholder="Digitar aqui"
      onKeyUp={handleTyping}
      autoFocus
    />
  );
}
