import React, { useState } from 'react';

import Wrapper from './Range.styled';

export default function Range(props) {
  const { chave, unidRange, alterarTamanho } = props;

  const [valor, setValor] = useState(0);

  const handleRangeChange = (event) => {
    const value = parseInt(event.target.value);

    setValor(value);
    alterarTamanho(value);
  };

  return (
    <Wrapper>
      <label htmlFor={chave} className="form-label">
        {`${unidRange}: ${valor}`}
      </label>
      <input
        id={chave}
        className="form-range"
        type="range"
        min="1"
        max="10"
        step="1"
        onChange={handleRangeChange}
      />
    </Wrapper>
  );
}
