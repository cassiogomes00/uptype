import React from 'react';

import Wrapper from './Nav.styled';
import NavItem from './NavItem/NavItem';

import iconHome from '../../../assets/img/icon-home.png';
import iconTests from '../../../assets/img/icon-tests.png';
import iconRanking from '../../../assets/img/icon-ranking.png';
import iconHistory from '../../../assets/img/icon-history.png';
import iconAbout from '../../../assets/img/icon-about.png';

export default function Nav() {
  return (
    <Wrapper className="navbar">
      <NavItem href="#" icon={iconHome} name="Home" />
      <NavItem href="#" icon={iconTests} name="Testes" />
      <NavItem href="#" icon={iconRanking} name="Ranking" />
      <NavItem href="#" icon={iconHistory} name="Historico" />
      <NavItem href="#" icon={iconAbout} name="Sobre" />
    </Wrapper>
  );
}
