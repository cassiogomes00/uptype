import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from '../../../assets/styles/conteudo.styled';

import Titulo from './Titulo/Titulo';
import Button from './Button/Button';
import Input from './Input/Input';
import Texto from './Texto/Texto';
import { Link } from 'react-router-dom';

import { adicionarRegistro } from '../../../store/Historico/Historico.actions';
import { terminar } from '../../../store/Teste/Teste.actions';

export default function Conteudo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.teste;
  });

  const calcularVelocidade = (inicio, fim, teclas) => {
    const intervalo = (fim.getTime() - inicio.getTime()) / 60000;
    const tpm = Math.round(teclas / intervalo);

    return tpm;
  };

  const salvarRegistro = () => {
    const velocidade = calcularVelocidade(
      state.inicio,
      state.fim,
      state.textoDigitado.length
    );
    dispatch(adicionarRegistro(state.fim, velocidade));
    dispatch(terminar());
  };

  return (
    <Wrapper>
      <Titulo> {state.titulo} </Titulo>
      <Texto />
      <Input />
      <Link to="/testes">
        <Button salvarRegistro={salvarRegistro}>Finalizar</Button>
      </Link>
    </Wrapper>
  );
}
