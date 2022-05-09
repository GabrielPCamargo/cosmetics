import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FaPlusCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import { Container, Title, NewProduct, Flex } from './styled';

import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function MyProductRegister() {
  const id = useSelector((state) => state.login.user.id);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/users/${id}/products`);
        setProducts(data);

        setIsLoading(false);
      } catch (err) {
        err.response.data.errors.map((error) => toast.error(error));
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  const handleUpdateOnDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <Flex>
      <Loading isLoading={isLoading} />
      <Title>Meus produtos cadastrados</Title>

      <NewProduct>
        <Link to="/myproducts/register">
          <span>Adicionar novo Produto</span>
          <FaPlusCircle size={25} />
        </Link>
      </NewProduct>

      <Container>
        {products &&
          products.map((product) => (
            <Product
              key={product.id}
              {...product}
              handleUpdateOnDelete={handleUpdateOnDelete}
            />
          ))}
      </Container>
      <Footer />
    </Flex>
  );
}
