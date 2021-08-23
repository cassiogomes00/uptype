import React from 'react';

import Wrapper from '../../../assets/styles/conteudo.styled';
import SectionConteudo from './SectionConteudo/SectionConteudo';

import TestesRecomendados from './TestesRecomendados/TestesRecomendados';

export default function Conteudo() {
  return (
    <Wrapper>
      <SectionConteudo
        titulo="Testes recomendados"
        link="/testes"
        conteudo={<TestesRecomendados />}
      />
      <SectionConteudo titulo="Histórico" link="#" conteudo="conteudo" />
      <SectionConteudo titulo="Ranking" link="#" conteudo="conteudo" />
    </Wrapper>
  );
}
