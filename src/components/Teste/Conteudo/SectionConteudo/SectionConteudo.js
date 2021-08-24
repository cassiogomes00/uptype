import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  alterarContraRelogio,
  alterarMaratona,
  alterarZen,
} from '../../../../store/Testes/Testes.actions';

import Wrapper from './SectionConteudo.styled';

import Titulo from '../Titulo/Titulo';
import Icone from './Icone/Icone';
import Descricao from './Descricao/Descricao';
import Range from './Range/Range';
import Radios from './Radios/Radios';
import Button from '../Button/Button';

export default function SectionConteudo(props) {
  const { chave, titulo, icone, descricao, unidRange } = props;
  const [valores, setValores] = useState({ tamanho: 1, modo: 'aleatorio' });

  const dispatch = useDispatch();

  const alterarTamanho = (tam) => {
    setValores({ ...valores, tamanho: tam });
  };

  const alterarModo = (mod) => {
    setValores({ ...valores, modo: mod });
  };

  const alterarEstado = (event) => {
    const { tamanho, modo } = valores;

    switch (chave) {
      case 'contra-relogio':
        dispatch(alterarContraRelogio(tamanho, modo));
        break;
      case 'maratona':
        dispatch(alterarMaratona(tamanho, modo));
        break;
      case 'zen':
        dispatch(alterarZen(tamanho, modo));
        break;
      default:
        console.error('Chave alterada');
    }
  };

  return (
    <Wrapper>
      <Titulo>{titulo}</Titulo>
      <Icone src={icone} alt={`Ícone ${titulo}`} />
      <Descricao>{descricao}</Descricao>

      <Range
        chave={`range-${chave}`}
        unidRange={unidRange}
        alterarTamanho={alterarTamanho}
      />
      <Radios chave={`radio-${chave}`} alterarModo={alterarModo} />
      <Link to="/teste">
        <Button alterarEstado={alterarEstado}>Iniciar</Button>
      </Link>
    </Wrapper>
  );
}
