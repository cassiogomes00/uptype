import React from 'react';

import Wrapper, { Icone, Name } from './Card.styled';

export default function Card(props) {
  const { href, icon, name } = props;

  return (
    <Wrapper href={href}>
      <Icone src={icon} alt={`Icone ${name}`} />
      <Name>{name}</Name>
    </Wrapper>
  );
}
