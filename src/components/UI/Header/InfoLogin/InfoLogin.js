import React from 'react';
import IconLogin from './IconLogin/IconLogin';
import LoginLinha1 from './LoginLinha1/LoginLinha1';
import LoginLinha2 from './LoginLinha2/LoginLinha2';

import Wrapper from './InfoLogin.styled';

import iconUser from '../../../../assets/img/icon-user.png';

export default function InfoLogin() {
  return (
    <Wrapper>
      <IconLogin src={iconUser} alt="Ícone do usuário" />
      <LoginLinha1>Entrar</LoginLinha1>
      <LoginLinha2>Cadastrar</LoginLinha2>
    </Wrapper>
  );
}
