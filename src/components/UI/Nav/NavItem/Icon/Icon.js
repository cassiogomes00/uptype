import React from 'react';
import Wrapper from './Icon.styled';

export default function Icon(props) {
  const { src, alt } = props;
  return <Wrapper src={src} alt={alt} />;
}
