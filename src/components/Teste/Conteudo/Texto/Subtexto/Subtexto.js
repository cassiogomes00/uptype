import React from 'react';

import Wrapper from './Subtexto.styled';

export default function Subtexto(props) {
  const { estaCorreto, children } = props;
  return <Wrapper estaCorreto={estaCorreto}>{children}</Wrapper>;
}
