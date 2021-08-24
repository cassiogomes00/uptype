import React from 'react';

import Wrapper from './Radios.styled';

import Radio from './Radio/Radio';

export default function Radios(props) {
  const { chave, alterarModo } = props;

  return (
    <Wrapper>
      <p>Modo</p>
      <Radio
        label="Aleatório"
        name={chave}
        sufixo="aleatorio"
        alterarModo={alterarModo}
      />
      <Radio
        label="Texto"
        name={chave}
        sufixo="texto"
        alterarModo={alterarModo}
      />
    </Wrapper>
  );
}
