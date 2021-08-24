import React from 'react';

import Wrapper from '../../assets/styles/globalStyle.styled';
import Conteudo from '../../components/Teste/Conteudo/Conteudo';

import Header from '../../components/UI/Header/Header';
import Nav from '../../components/UI/Nav/Nav';

export default function Teste() {
  return (
    <Wrapper>
      <Header />
      <Nav />
      <Conteudo />
    </Wrapper>
  );
}
