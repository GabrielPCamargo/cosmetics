import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FaPlusCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import { Container, Title, NewProduct } from './styled';

import axios from '../../services/axios';

export default function MyProductRegister() {
  const id = useSelector((state) => state.login.user.id);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`/users/${id}/products`);
        console.log(data);
        setProducts(data);
      } catch (err) {
        console.log(err.response);
        err.errors.map((error) => toast.error(error));
      }
    }

    getData();
  }, []);

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
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Container>
      <Footer />
    </>
  );
}
