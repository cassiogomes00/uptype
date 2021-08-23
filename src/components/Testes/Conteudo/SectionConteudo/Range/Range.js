import React from 'react';

import Wrapper from './Range.styled';

export default function Range(props) {
  const { chave, unidRange } = props;

  return (
    <Wrapper>
      <label htmlFor={chave} className="form-label">
        {unidRange}:
      </label>
      <input
        id={chave}
        className="form-range"
        type="range"
        min="1"
        max="10"
        step="1"
      />
    </Wrapper>
  );
}
