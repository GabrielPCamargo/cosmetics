import React, { useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { get } from 'lodash';
import { PropTypes } from 'prop-types';
import Footer from '../../components/Footer';
import { Container, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function MyProductRegister({ match }) {
  const id = get(match, 'params.id', '');
  const [image, setImage] = useState({});
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        const { data } = await axios.get(`/products/${id}`);
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setQuantity(data.quantity);
        setImageUrl(data.image);
      } catch (err) {
        toast.error(err.response.data.errors.map((error) => error.message));
      }
    }

    getData();
  }, [id]);

  const handleImageClick = (e) => {
    e.target.parentNode.children[1].click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(file);
    setImageUrl(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isFormInvalid = false;

    if (title.length < 2 || title.length > 255) {
      isFormInvalid = true;
      toast.error('O titulo deve ter entre 2 e 255 caracteres');
    }

    if (description.length < 2 || description.length > 255) {
      isFormInvalid = true;
      toast.error('A descrição deve ter entre 2 e 255 caracteres');
    }

    if (!price) {
      isFormInvalid = true;
      toast.error('Você precisa definir um preço');
    }

    if (!quantity) {
      isFormInvalid = true;
      toast.error('Você precisa definir uma quantidade');
    }

    if (isFormInvalid) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('quantity', quantity);

    if (image.name) formData.append('image', image);

    if (!id) {
      try {
        await axios.post('/products/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        toast.success('Produto criado com sucesso!');
        history.push('/myproducts');
      } catch (err) {
        err.response.data.errors.map((error) => toast.error(error));
      }
    } else {
      try {
        await axios.put(`/products/${id}/edit`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        toast.success('Produto editado com sucesso!');
        history.push('/myproducts');
      } catch (err) {
        err.response.data.errors.map((error) => toast.error(error));
      }
    }
  };

  return (
    <>
      <Container>
        <h3>Novo Produto</h3>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="image">
            {!imageUrl ? (
              <FaCamera size={50} />
            ) : (
              <img src={imageUrl} alt="a" />
            )}
            <input type="file" name="image" onChange={handleImageChange} />
            <button type="button" onClick={handleImageClick}>
              Trocar imagem
            </button>
          </label>
          <input
            placeholder="Titulo"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Descrição"
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Preço"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            placeholder="Quantidade"
            name="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button type="submit">{id ? 'Editar' : 'Cadastrar'}</button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

MyProductRegister.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
