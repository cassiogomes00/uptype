import React from 'react';
import Wrapper from './Descricao.styled';

export default function Descricao(props) {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
}
