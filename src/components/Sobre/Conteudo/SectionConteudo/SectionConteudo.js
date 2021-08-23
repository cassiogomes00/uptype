import React from 'react';

import Wrapper, { Titulo, VerMais, Conteudo } from './SectionConteudo.styled';

export default function SectionConteudo(props) {
  const { titulo, conteudo } = props;
  return (
    <Wrapper>
      <Titulo>{titulo}</Titulo>
      <Conteudo>{conteudo}</Conteudo>
    </Wrapper>
  );
}
