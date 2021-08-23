import React from 'react';
import Button from '../../../UI/Button/Button';

import Wrapper, { Titulo, VerMais, Conteudo } from './SectionConteudo.styled';

export default function SectionConteudo(props) {
  const { titulo, href, conteudo } = props;
  return (
    <Wrapper>
      <Titulo>{titulo}</Titulo>
      <VerMais href={href}>
        <Button>Ver mais</Button>
      </VerMais>
      <Conteudo>{conteudo}</Conteudo>
    </Wrapper>
  );
}
