import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

import history from '../../services/history';

import { Container } from './styled';

export default function Product({ image, title, price, id }) {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const handleSeeProduct = () => {
    history.push(`/products/${id}`);
  };

  return (
    <Container>
      <img src={image} alt="img" />
      <h3>{title}</h3>
      <div>R${price}</div>
      {isLoggedIn ? (
        <div className="functions">
          <Link className="edit" to="/products/ /edit">
            <FaEdit size={25} />
          </Link>
          <Link className="delete" to="/products/delete">
            <FaTrashAlt size={25} />
          </Link>
        </div>
      ) : (
        <button type="button" onClick={handleSeeProduct}>
          Ver produto
        </button>
      )}
    </Container>
  );
}

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

Product.defaultProps = {
  image: '',
};
