import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';

import Footer from '../../components/Footer';
import { Container, Form } from './styled';
import * as actions from '../../store/modules/login/actions';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    let formErrors = false;

    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      formErrors = true;
    }

    if (password.length < 6 || password.length > 50) {
      toast.error('Senha inválida');
      formErrors = true;
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
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
