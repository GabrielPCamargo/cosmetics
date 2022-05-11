import PropTypes from 'prop-types';
import { useState } from 'react';

import { Container } from './styled';

export default function Pagination({ setPage, totalItems, itemsPerPage }) {
  const [atualPage, setAtualPage] = useState(1);
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pages.push(i);
  }

  const handleSelect = (pageNumber) => {
    setPage(pageNumber);
    setAtualPage(pageNumber);
  };

  const handleBack = () => {
    let previousPage = atualPage - 1;
    if (previousPage < 0) previousPage = 0;
    setPage(previousPage);
    setAtualPage(previousPage);
  };

  const handleNext = () => {
    let nextPage = atualPage + 1;
    if (nextPage > Math.max(...pages)) nextPage = Math.max(...pages);
    setPage(nextPage);
    setAtualPage(nextPage);
  };

  return (
    <Container>
      <ul>
        <li onClick={handleBack} onKeyPress={handleBack}>
          Voltar
        </li>
        {pages.map((number) => (
          <li
            key={number}
            onClick={() => handleSelect(number)}
            className={atualPage === number ? 'active' : ''}
            onKeyPress={() => setPage(number)}
          >
            {number}
          </li>
        ))}
        <li onClick={handleNext} onKeyPress={handleNext}>
          Seguinte
        </li>
      </ul>
    </Container>
  );
}

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};
