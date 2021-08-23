import React from 'react';
import Wrapper from './IconLogin.styled';

export default function IconLogin(props) {
  const { src, alt } = props;
  return <Wrapper src={src} alt={alt} />;
}
