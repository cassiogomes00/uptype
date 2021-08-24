import React from 'react';
import Wrapper from './Titulo.styled';

export default function Titulo(props) {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
}
