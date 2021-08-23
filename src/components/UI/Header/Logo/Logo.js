import React from 'react';

import Wrapper from './Logo.styled';

import logo from '../../../../assets/img/icon-logo.png';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <Wrapper src={logo} alt="Logo uptype" />
    </Link>
  );
}
