import React from 'react';

import Wrapper from '../../../assets/styles/conteudo.styled';

import Texto from './Texto/Texto';
import Titulo from './Titulo/Titulo';

export default function Conteudo() {
  return (
    <Wrapper>
      <Titulo>Sobre</Titulo>
      <Texto>
        Esta aplicação tem o objetivo de auxiliar usuários que buscam analisar e
        melhorar sua velocidade de digitação. Conta com vários testes, como
        contra o relógio e maratona.
      </Texto>
      <Texto>
        Ela também analisa sua forma de digitar, lhe dando feedbacks, como quais
        são os principais erros, taxa de erros e acertos e velocidade de
        digitação. Você saberá exatamente onde está errando e no que melhorar.
      </Texto>
      <Texto>
        Vale lembrar que ainda está em fase de protótipo. Isto significa que
        representa mais visual que funcionalidade. Fique a vontade para dar
        feedbacks para que todos possam usar uma aplicação melhor.
      </Texto>
    </Wrapper>
  );
}
