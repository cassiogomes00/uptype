import React from 'react';

import Wrapper from './Nav.styled';
import NavItem from './NavItem/NavItem';
import { Link } from 'react-router-dom';

import iconHome from '../../../assets/img/icon-home.png';
import iconTests from '../../../assets/img/icon-tests.png';
import iconRanking from '../../../assets/img/icon-ranking.png';
import iconHistory from '../../../assets/img/icon-history.png';
import iconAbout from '../../../assets/img/icon-about.png';

export default function Nav() {
  return (
    <Wrapper className="navbar">
      <Link to="/">
        <NavItem icon={iconHome} name="Home" />
      </Link>
      <Link to="/testes">
        <NavItem icon={iconTests} name="Testes" />
      </Link>
      <Link to="/ranking">
        <NavItem icon={iconRanking} name="Ranking" />
      </Link>
      <Link to="/historico">
        <NavItem icon={iconHistory} name="Historico" />
      </Link>
      <Link to="/sobre">
        <NavItem icon={iconAbout} name="Sobre" />
      </Link>
    </Wrapper>
  );
}
