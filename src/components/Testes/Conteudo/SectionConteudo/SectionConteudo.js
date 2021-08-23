import React from 'react';
import Radio from './Radio/Radio';
import Range from './Range/Range';
import Titulo from './Titulo/Titulo';
import Icone from './Icone/Icone';
import Descricao from './Descricao/Descricao';
import Button from './Button/Button';

import Wrapper from './SectionConteudo.styled';

export default function SectionConteudo(props) {
  const { chave, titulo, icone, descricao, unidRange } = props;
  return (
    <Wrapper>
      <Titulo>{titulo}</Titulo>
      <Icone src={icone} alt={`Ícone ${titulo}`} />
      <Descricao>{descricao}</Descricao>
      <Range chave={`range-${chave}`} unidRange={unidRange} />
      <Radio chave={`radio-${chave}`} />
      <Button>Iniciar</Button>
    </Wrapper>
  );
}
