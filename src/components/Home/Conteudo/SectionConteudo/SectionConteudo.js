import React from 'react';

import Wrapper from './SectionConteudo.styled';

export default function SectionConteudo(props) {
  const {titulo, href, conteudo}
  return <Wrapper>
    <h1>{titulo}</h1>
    <a href={href}><span>Ver mais</span></a>
    <div>{conteudo}</div>
  </Wrapper>;
}
