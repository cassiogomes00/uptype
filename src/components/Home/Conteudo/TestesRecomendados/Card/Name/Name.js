import React from 'react';

import Wrapper from './Name.styled';

export default function Name(props) {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
}
