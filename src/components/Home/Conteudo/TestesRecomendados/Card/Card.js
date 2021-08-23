import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './Card.styled';

import Icon from './Icon/Icon';
import Name from './Name/Name';

export default function Card(props) {
  const { link, icon, name } = props;

  return (
    <Link to={link}>
      <Wrapper>
        <Icon src={icon} alt={`Icone ${name}`} />
        <Name>{name}</Name>
      </Wrapper>
    </Link>
  );
}
