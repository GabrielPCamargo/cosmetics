import React from 'react';
import InputMask from 'react-input-mask';

import Footer from '../../components/Footer';
import { Container, Form } from './styled';

export default function Regiser() {
  return (
    <>
      <Container>
        <Form>
          <h3>Cadastro</h3>
          <input placeholder="Nome" name="nome" type="text" />
          <input placeholder="E-mail" name="email" type="email" />
          <input placeholder="Senha" name="password" type="password" />
          <InputMask mask="(99)\99999-9999" placeholder="(XX)9XXXX-XXXX" />
          <input placeholder="Endereço" name="address" type="tel" />

          <button type="submit">Entrar</button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
