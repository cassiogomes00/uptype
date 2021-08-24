import React from 'react';

import Wrapper from './Button.styled';

export default function Button(props) {
  const { salvarRegistro } = props;

  const handleClick = (event) => {
    salvarRegistro();
  };

  const { children } = props;
  return (
    <Wrapper className="btn" onClick={handleClick}>
      {children}
    </Wrapper>
  );
}
