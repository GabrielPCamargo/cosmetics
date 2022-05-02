import React from 'react';
import { Link } from 'react-router-dom';

import { FaPlusCircle } from 'react-icons/fa';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import { Container, Title, NewProduct } from './styled';

export default function MyProductRegister() {
  return (
    <>
      <Title>Meus produtos cadastrados</Title>

      <NewProduct>
        <Link to="/myproducts/register">
          <span>Adicionar novo Produto</span>
          <FaPlusCircle size={25} />
        </Link>
      </NewProduct>

      <Container>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Container>
      <Footer />
    </>
  );
}
