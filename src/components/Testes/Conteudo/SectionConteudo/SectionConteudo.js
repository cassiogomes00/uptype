import React from 'react';
import Button from '../../../UI/Button/Button';
import Radio from './Radio/Radio';
import Range from './Range/Range';

import Wrapper, {
  Titulo,
  Icone,
  Descricao,
  Botao,
} from './SectionConteudo.styled';

export default function SectionConteudo(props) {
  const { chave, titulo, icone, descricao, unidRange } = props;
  return (
    <Wrapper>
      <Titulo>{titulo}</Titulo>
      <Icone src={icone} alt={`Ícone ${titulo}`} />
      <Descricao>{descricao}</Descricao>
      <Range chave={`range-${chave}`} unidRange={unidRange} />
      <Radio chave={`radio-${chave}`} />
      <Botao>
        <Button>Iniciar</Button>
      </Botao>
    </Wrapper>
  );
}
