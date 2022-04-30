import React from 'react';

import { Container } from './styled';

export default function Footer() {
  return (
    <Container>&copy; {new Date().getFullYear()} Gabriel Camargo</Container>
  );
}
