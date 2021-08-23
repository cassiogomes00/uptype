import React from 'react';

import Wrapper from './Conteudo.styled';
import SectionConteudo from './SectionConteudo/SectionConteudo';

export default function Conteudo() {
  return (
    <Wrapper>
      <SectionConteudo />
      <SectionConteudo />
      <SectionConteudo />
    </Wrapper>
  );
}
