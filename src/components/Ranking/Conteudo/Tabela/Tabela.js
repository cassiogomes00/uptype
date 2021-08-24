import React from 'react';
import Wrapper from './Tabela.styled';

import { useSelector } from 'react-redux';
import Linha from './Linha/Linha';

export default function Tabela() {
  const state = useSelector((state) => {
    return state.historico;
  });

  return (
    <Wrapper className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <td>Data</td>
          <td>Velocidade</td>
        </tr>
      </thead>
      <tbody>
        {state
          .sort((a, b) => {
            return b.data - a.data;
          })
          .map((registro) => {
            return <Linha key={registro.data} registro={registro} />;
          })}
      </tbody>
    </Wrapper>
  );
}
