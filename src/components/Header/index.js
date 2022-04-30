import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav, Header, LogoutButton } from './styled';

export default function PageHeader() {
  return (
    <Header>
      <h1>
        Produtos
        <span>Cosméticos</span>
      </h1>
      <Nav>
        <Link to="/avon">Avon</Link>
        <Link to="/natura">Natura</Link>
        <Link to="/boticario">Boticário</Link>
      </Nav>
      <LogoutButton>
        <Link to="/login">
          <FaUserAlt size={32} />
        </Link>
      </LogoutButton>
    </Header>
  );
}
