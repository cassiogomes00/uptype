import React from 'react';

import Wrapper from './Radio.style';

export default function Radio(props) {
  const { label, name, sufixo, alterarModo } = props;

  const alterarSelecionado = (event) => {
    const value = event.target.attributes.modo.value;
    alterarModo(value);
  };

  return (
    <Wrapper className="form-check form-check-inline">
      <label className="form-check-label" htmlFor={`${name}-${sufixo}`}>
        {label}
      </label>
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={`${name}-${sufixo}`}
        value={`${name}-${sufixo}`}
        modo={sufixo}
        onClick={alterarSelecionado}
      />
    </Wrapper>
  );
}
