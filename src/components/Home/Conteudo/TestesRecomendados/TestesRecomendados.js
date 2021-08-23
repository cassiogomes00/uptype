import React from 'react';
import Card from './Card/Card';

import Wrapper from './TestesRecomendados.styled';

import iconAgainstClock from '../../../../assets/img/icon-against-clock.png';
import iconMaraton from '../../../../assets/img/icon-maraton.png';
import iconZen from '../../../../assets/img/icon-zen.png';

export default function TestesRecomendados() {
  return (
    <Wrapper>
      <Card link="#" icon={iconAgainstClock} name="Contra o relógio" />
      <Card link="#" icon={iconMaraton} name="Maratona" />
      <Card link="#" icon={iconZen} name="Zen" />
    </Wrapper>
  );
}
