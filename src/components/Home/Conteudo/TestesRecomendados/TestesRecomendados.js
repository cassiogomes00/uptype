import React from 'react';
import Card from './Card/Card';

import Wrapper from './TestesRecomendados.styled';

import iconAgainstClock from '../../../../assets/img/icon-against-clock.png';
import iconMaraton from '../../../../assets/img/icon-maraton.png';
import iconZen from '../../../../assets/img/icon-zen.png';

export default function TestesRecomendados() {
  return (
    <Wrapper>
      <Card
        code="contra-relogio"
        icon={iconAgainstClock}
        name="Contra o relógio"
      />
      <Card code="maratona" icon={iconMaraton} name="Maratona" />
      <Card code="zen" icon={iconZen} name="Zen" />
    </Wrapper>
  );
}
