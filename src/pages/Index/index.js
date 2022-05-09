import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import SearchBar from '../../components/SearchBar';
import Loading from '../../components/Loading';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import axios from '../../services/axios';

import { Container, Flex } from './styled';

export default function Index() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
        setIsLoading(false);
      } catch (err) {
        err.errors.map((error) => toast.error(error));
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <Flex>
      <Loading isLoading={isLoading} />
      <SearchBar />
      <Container>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Container>
      <Footer />
    </Flex>
  );
}
