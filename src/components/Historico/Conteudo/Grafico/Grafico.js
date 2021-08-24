import React from 'react';
import Wrapper from './Grafico.styled';

import { Chart } from 'react-google-charts';
import { useSelector } from 'react-redux';

export default function Grafico() {
  const state = useSelector((state) => {
    return state.historico;
  });

  const historico = [
    ['Data', 'Velocidade'],
    ...state.map((registro) => {
      const { data, velocidade } = registro;
      return [data, velocidade];
    }),
  ];

  const options = {
    legend: { position: 'none' },
  };

  return (
    <Wrapper>
      <Chart
        height="400px"
        chartType="Line"
        data={historico}
        options={options}
        loader={<div>Loading Chart</div>}
      />
    </Wrapper>
  );
}
