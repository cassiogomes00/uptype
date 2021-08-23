import React from 'react';

import Wrapper from './Logo.styled';

import logo from '../../../../assets/img/icon-logo.png';

export default function Logo() {
  return (
    <a href="#">
      <Wrapper src={logo} alt="Logo uptype" />
    </a>
  );
}
