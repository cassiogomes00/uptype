import React from 'react';

import Wrapper from './Conteudo.styled';
import SectionConteudo from './SectionConteudo/SectionConteudo';

export default function Conteudo() {
  return (
    <Wrapper>
      <SectionConteudo titulo="Histórico" href="" conteudo="conteudo" />
      <SectionConteudo titulo="Ranking" href="" conteudo="conteudo" />
    </Wrapper>
  );
}
