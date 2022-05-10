import React from 'react';
import { FaSearch } from 'react-icons/fa';

import PropTypes from 'prop-types';

import { Container } from './styled';

export default function SearchBar({ handleValue, handleOnChange }) {
  return (
    <Container>
      <label htmlFor="search">
        <input
          name="search"
          type="text"
          placeholder="Pesquise seu produto aqui!"
          value={handleValue}
          onChange={handleOnChange}
        />
        <div>
          <FaSearch size={24} />
        </div>
      </label>
    </Container>
  );
}

SearchBar.propTypes = {
  handleValue: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};
