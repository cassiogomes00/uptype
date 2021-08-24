import React from 'react';

import Wrapper from '../../../assets/styles/conteudo.styled';
import Grafico from '../../Historico/Conteudo/Grafico/Grafico';
import Tabela from '../../Ranking/Conteudo/Tabela/Tabela';
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
      <SectionConteudo
        titulo="Histórico"
        link="/historico"
        conteudo={<Grafico />}
      />
      <SectionConteudo titulo="Ranking" link="/ranking" conteudo={<Tabela />} />
    </Wrapper>
  );
}
