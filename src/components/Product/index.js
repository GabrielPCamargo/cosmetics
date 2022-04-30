import React from 'react';

import { Container } from './styled';

export default function Product() {
  return (
    <Container>
      <img src="./ex.jpg" alt="img" />
      <h3>Kaiak Aventura Desodorante Colônia Masculino</h3>
      <div>R$89,90</div>
      <button type="button">Ver produto</button>
    </Container>
  );
}
