import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import SearchBar from '../../components/SearchBar';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import axios from '../../services/axios';

import { Container } from './styled';

export default function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (err) {
        err.errors.map((error) => toast.error(error));
      }
    }

    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <Container>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Container>
      <Footer />
    </>
  );
}
