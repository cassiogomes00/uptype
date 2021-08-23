import React from 'react';
import Wrapper from './Button.styled';

export default function Button(props) {
  const { children } = props;
  return <Wrapper className="btn">{children}</Wrapper>;
}
