import React from 'react';
import Wrapper from './Texto.styled';
export default function Texto(props) {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
}
