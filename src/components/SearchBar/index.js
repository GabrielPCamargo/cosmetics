import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styled';

export default function SearchBar() {
  return (
    <Container>
      <label htmlFor="search">
        <input
          name="search"
          type="text"
          placeholder="Pesquise seu produto aqui!"
        />
        <div>
          <FaSearch size={24} />
        </div>
      </label>
    </Container>
  );
}
