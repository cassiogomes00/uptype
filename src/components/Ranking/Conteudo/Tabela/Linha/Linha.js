import React from 'react';
import Wrapper from './Linha.styled';

export default function Linha(props) {
  const { registro } = props;
  const getData = (data) => {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };
  return (
    <Wrapper>
      <td>{getData(registro.data)}</td>
      <td>{registro.velocidade}</td>
    </Wrapper>
  );
}
