import React from 'react';

import Wrapper, { Icon } from './NavItem.styled';

export default function NavItem(props) {
  const { href, icon, name } = props;
  return (
    <Wrapper href={href}>
      <Icon src={icon} alt={`Ícone ${name}`} />
      <span>{name}</span>
    </Wrapper>
  );
}
