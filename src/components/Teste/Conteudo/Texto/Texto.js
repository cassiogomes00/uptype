import React from 'react';

import Wrapper from './Texto.styled';

import { useSelector } from 'react-redux';
import Subtexto from './Subtexto/Subtexto';

export default function Texto(props) {
  const text =
    'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.\nSunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.\nEst velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat. Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.\nIncididunt duis commodo mollit esse veniam non exercitation dolore occaecat ea nostrud laboris. Adipisicing occaecat fugiat fugiat irure fugiat in magna non consectetur proident fugiat. Commodo magna et aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim ex. Est eiusmod commodo occaecat consequat laboris est do duis. Enim incididunt non culpa velit quis aute in elit magna ullamco in consequat ex proident.\nDolore incididunt mollit fugiat pariatur cupidatat ipsum laborum cillum. Commodo consequat velit cupidatat duis ex nisi non aliquip ad ea pariatur do culpa. Eiusmod proident adipisicing tempor tempor qui pariatur voluptate dolor do ea commodo. Veniam voluptate cupidatat ex nisi do ullamco in quis elit.';

  const state = useSelector((state) => {
    return state.teste;
  });

  const tamanhoCorreto = (textoCompleto, textoDigitado) => {
    if (textoCompleto.length === 0) {
      return 0;
    }

    if (textoDigitado === textoCompleto) {
      return textoCompleto.length;
    }

    return tamanhoCorreto(
      textoCompleto.slice(0, -1),
      textoDigitado.slice(0, -1)
    );
  };

  const dados = {
    maxDigitado: state.textoDigitado.length,
    maxCerto: tamanhoCorreto(
      text.slice(0, state.textoDigitado.length),
      state.textoDigitado
    ),
  };

  return (
    <Wrapper>
      <Subtexto estaCorreto={true}>{text.slice(0, dados.maxCerto)}</Subtexto>
      <Subtexto estaCorreto={false}>
        {text.slice(dados.maxCerto, dados.maxDigitado)}
      </Subtexto>
      <span>{text.slice(dados.maxDigitado)}</span>
    </Wrapper>
  );
}
