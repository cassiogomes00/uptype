import React from 'react';
import Wrapper from './Conteudo.styled';

export default function Conteudo(props) {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
}
