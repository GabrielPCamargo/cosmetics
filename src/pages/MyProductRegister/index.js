import React, { useState } from 'react';

import Footer from '../../components/Footer';
import { Container, Form } from './styled';

export default function MyProductRegister() {
  const [image, setImage] = useState(
    `http://${window.location.hostname}:3000/ex.jpg`
  );

  const handleImageClick = (e) => {
    e.target.parentNode.children[1].click();
  };

  const hadleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  return (
    <>
      <Container>
        <h3>Novo Produto</h3>
        <Form>
          <label htmlFor="image">
            <img src={image} alt="a" />
            <input type="file" name="image" onChange={hadleImageChange} />
            <button type="button" onClick={handleImageClick}>
              Trocar imagem
            </button>
          </label>
          <input placeholder="Titulo" name="title" type="text" />
          <input placeholder="Descrição" name="description" type="text" />
          <input placeholder="Preço" name="price" type="number" />
          <input placeholder="Quantidade" name="quantity" type="number" />

          <button type="submit">Cadastrar</button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
