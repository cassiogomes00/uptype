import React from 'react';
import Wrapper from './Icone.styled';

export default function Icone(props) {
  const { src, alt } = props;
  return <Wrapper src={src} alt={alt} />;
}
