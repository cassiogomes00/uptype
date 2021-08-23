import React from 'react';

import Wrapper, { IconLogin, Entrar, Cadastrar } from './InfoLogin.styled';

import iconUser from '../../../../assets/img/icon-user.png';

export default function InfoLogin() {
  return (
    <Wrapper>
      <IconLogin src={iconUser} alt="Ícone do usuário" />
      <Entrar>Entrar</Entrar>
      <Cadastrar>Cadastrar</Cadastrar>
    </Wrapper>
  );
}
