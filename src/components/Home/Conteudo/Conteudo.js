import React from 'react';

import Wrapper from './Conteudo.styled';
import SectionConteudo from './SectionConteudo/SectionConteudo';

import TestesRecomendados from './TestesRecomendados/TestesRecomendados';

export default function Conteudo() {
  return (
    <Wrapper>
      <SectionConteudo
        titulo="Testes recomendados"
        href=""
        conteudo={<TestesRecomendados />}
      />
      <SectionConteudo titulo="Histórico" href="" conteudo="conteudo" />
      <SectionConteudo titulo="Ranking" href="" conteudo="conteudo" />
    </Wrapper>
  );
}
