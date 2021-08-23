import React from 'react';

import Wrapper from './Header.styled';

import Logo from './Logo/Logo';
import UltimoRegistro from './UltimoRegistro/UltimoRegistro';
import InfoLogin from './InfoLogin/InfoLogin';

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <UltimoRegistro />
      <InfoLogin />
    </Wrapper>
  );
}
