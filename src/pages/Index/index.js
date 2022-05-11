import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import SearchBar from '../../components/SearchBar';
import Loading from '../../components/Loading';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import axios from '../../services/axios';

import { Container, Flex } from './styled';
import Pagination from '../../components/Pagination';

export default function Index() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const itemsPerPage = 9;

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await await axios.get('/products', {
          params: {
            offset: itemsPerPage * (page - 1),
            limit: itemsPerPage,
          },
        });
        setTotalProducts(response.data.count);
        setProducts(response.data.rows);
        setFilteredProducts(response.data.rows);
        window.scrollTo(0, 0);
        setIsLoading(false);
      } catch (err) {
        err.errors.map((error) => toast.error(error));
        setIsLoading(false);
      }
    }

    getData();
  }, [page]);

  return (
    <Flex>
      <Loading isLoading={isLoading} />
      <SearchBar
        handleValue={search}
        handleOnChange={(e) => setSearch(e.target.value)}
      />
      <Container>
        {filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Container>
      <Pagination
        totalItems={totalProducts}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
      />
      <Footer />
    </Flex>
  );
}
