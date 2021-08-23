import React from 'react';

import Wrapper from './Radio.styled';

export default function Radio(props) {
  const { chave } = props;

  console.log(chave);

  return (
    <Wrapper>
      <p>Modo</p>

      <div className="form-check form-check-inline">
        <label className="form-check-label" htmlFor={`${chave}-aleatorio`}>
          Aleatório
        </label>
        <input
          className="form-check-input"
          type="radio"
          name={chave}
          id={`${chave}-aleatorio`}
          value={`${chave}-aleatorio`}
          checked
        />
      </div>

      <div className="form-check form-check-inline">
        <label className="form-check-label" htmlFor={`${chave}-texto`}>
          Texto
        </label>
        <input
          className="form-check-input"
          type="radio"
          name={chave}
          id={`${chave}-texto`}
          value={`${chave}-texto`}
        />
      </div>
    </Wrapper>
  );
}
