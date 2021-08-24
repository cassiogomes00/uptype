import React from 'react';

import Wrapper from '../../../assets/styles/conteudo.styled';

import Titulo from './Titulo/Titulo';
import Tabela from './Tabela/Tabela';

export default function Conteudo() {
  return (
    <Wrapper>
      <Titulo>Ranking</Titulo>
      <Tabela />
    </Wrapper>
  );
}
