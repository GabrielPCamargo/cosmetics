import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import Footer from '../../components/Footer';
import axios from '../../services/axios';
import history from '../../services/history';
import { Container, Form } from './styled';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsInvalid = false;

    if (name.length < 2 || name.length > 255) {
      formIsInvalid = true;
      toast.error('Nome deve ter entre 2 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formIsInvalid = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 2 || password.length > 255) {
      formIsInvalid = true;
      toast.error('Senha inválida');
    }

    if (number.length < 8) {
      formIsInvalid = true;
      toast.error('Número inválido');
    }

    if (formIsInvalid) return;

    try {
      await axios.post('/users', {
        name,
        email,
        password,
        phone_number: number,
        address,
      });

      toast.success('Cadastro realizado com suceso!');
      history.push('/login');
    } catch (err) {
      err.response.data.errors.map((error) => toast.error(error));
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h3>Cadastro</h3>
          <input
            placeholder="Nome"
            name="nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="E-mail"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputMask
            mask="(99)\99999-9999"
            placeholder="(XX)9XXXX-XXXX"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            placeholder="Endereço"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
