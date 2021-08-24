import React from 'react';

import Wrapper from '../../../assets/styles/conteudo.styled';
import Grafico from './Grafico/Grafico';

import Titulo from './Titulo/Titulo';

export default function Conteudo() {
  return (
    <Wrapper>
      <Titulo>Historico</Titulo>
      <Grafico />
    </Wrapper>
  );
}
