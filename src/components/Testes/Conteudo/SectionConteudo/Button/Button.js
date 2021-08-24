import React from 'react';

import Wrapper from './Button.styled';

export default function Button(props) {
  const { children, alterarEstado } = props;
  return (
    <Wrapper className="btn" onClick={alterarEstado}>
      {children}
    </Wrapper>
  );
}
