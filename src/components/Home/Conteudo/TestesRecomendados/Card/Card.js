import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Wrapper from './Card.styled';

import Icon from './Icon/Icon';
import Name from './Name/Name';

import { iniciarTeste } from '../../../../../store/Teste/Teste.actions';

export default function Card(props) {
  const { code, icon, name } = props;
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(iniciarTeste(code, 1));
  };

  return (
    <Link to="/teste">
      <Wrapper onClick={handleClick}>
        <Icon src={icon} alt={`Icone ${name}`} />
        <Name>{name}</Name>
      </Wrapper>
    </Link>
  );
}
