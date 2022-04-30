import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import { Container, Form } from './styled';

export default function Login() {
  return (
    <>
      <Container>
        <Form>
          <h3>Login</h3>
          <input placeholder="E-mail" name="email" type="email" />
          <input placeholder="Senha" name="password" type="password" />
          <button type="submit">Entrar</button>
        </Form>

        <h4>Ainda não possui cadastro?</h4>
        <Link to="/register">
          <button type="button">Cadastrar-se</button>
        </Link>
      </Container>
      <Footer />
    </>
  );
}
