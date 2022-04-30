import React from 'react';

import SearchBar from '../../components/SearchBar';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import { Container } from './styled';

export default function Index() {
  return (
    <>
      <SearchBar />
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
