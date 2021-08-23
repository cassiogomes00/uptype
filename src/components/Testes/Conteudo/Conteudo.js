import React from 'react';

import Wrapper from './Conteudo.styled';
import SectionConteudo from './SectionConteudo/SectionConteudo';

import iconAgainstClock from '../../../assets/img/icon-against-clock.png';
import iconMaraton from '../../../assets/img/icon-maraton.png';
import iconZen from '../../../assets/img/icon-zen.png';

export default function Conteudo() {
  return (
    <Wrapper>
      <SectionConteudo
        chave="contra-relogio"
        titulo="Contra o relógio"
        icone={iconAgainstClock}
        descricao="Neste modo você luta contra o relógio, digitando o mais rápido que conseguir até que o tempo se esgote."
        unidRange="Minutos"
      />
      <SectionConteudo
        chave="maratona"
        titulo="Maratona"
        icone={iconMaraton}
        descricao="Neste modo, você define o tamanho do texto que quer digitar e manda ver!"
        unidRange="Paragrafos"
      />
      <SectionConteudo
        chave="zen"
        titulo="Zen"
        icone={iconZen}
        descricao="Neste modo, você não tem limite. Apenas digite até querer parar."
        unidRange="Sem limites"
      />
    </Wrapper>
  );
}
