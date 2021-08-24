import React from 'react';
import { useSelector } from 'react-redux';

import Wrapper from './UltimoRegistro.styled';

export default function UltimoRegistro() {
  const state = useSelector((state) => {
    return state.historico;
  });

  const ultimoRegistro = state[state.length - 1];

  return (
    <Wrapper>
      <span>Ultimo registro</span>
      <span>{ultimoRegistro.velocidade} tpm</span>
    </Wrapper>
  );
}
