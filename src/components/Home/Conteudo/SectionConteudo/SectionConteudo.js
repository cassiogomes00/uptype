import React from 'react';

import Wrapper from './SectionConteudo.styled';

import { Link } from 'react-router-dom';

import Titulo from './Titulo/Titulo';
import Button from './Button/Button';
import Conteudo from './Conteudo/Conteudo';

export default function SectionConteudo(props) {
  const { titulo, link, conteudo } = props;
  return (
    <Wrapper>
      <Titulo>{titulo}</Titulo>

      <Link to={link}>
        <Button>Ver mais</Button>
      </Link>

      <Conteudo>{conteudo}</Conteudo>
    </Wrapper>
  );
}
