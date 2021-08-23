import React from 'react';

import Wrapper from './NavItem.styled';
import Icon from './Icon/Icon';
import Name from './Name/Name';

export default function NavItem(props) {
  const { href, icon, name } = props;
  return (
    <Wrapper href={href}>
      <Icon src={icon} alt={`Ícone ${name}`} />
      <Name>{name}</Name>
    </Wrapper>
  );
}
