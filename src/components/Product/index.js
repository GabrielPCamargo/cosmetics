import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { Container } from './styled';

export default function Product() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <Container>
      <img src="./ex.jpg" alt="img" />
      <h3>Kaiak Aventura Desodorante Colônia Masculino</h3>
      <div>R$89,90</div>
      {isLoggedIn ? (
        <div className="functions">
          <Link className="edit" to="/products/edit">
            <FaEdit size={25} />
          </Link>
          <Link className="delete" to="/products/delete">
            <FaTrashAlt size={25} />
          </Link>
        </div>
      ) : (
        <button type="button">Ver produto</button>
      )}
    </Container>
  );
}
