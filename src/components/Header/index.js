import React from 'react';
import { FaUserAlt, FaSignInAlt, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { Nav, Header, LogoutButton } from './styled';
import * as actions from '../../store/modules/login/actions';
import history from '../../services/history';

export default function PageHeader() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(actions.loginFailure());
    toast.success('Deslogado com sucesso');
    history.push('/');
  };

  return (
    <Header>
      <h1>
        Produtos
        <span>Cosméticos</span>
      </h1>
      {!isLoggedIn && (
        <Nav>
          <Link to="/avon">Avon</Link>
          <Link to="/natura">Natura</Link>
          <Link to="/boticario">Boticário</Link>
        </Nav>
      )}
      <LogoutButton>
        {!isLoggedIn ? (
          <Link to="/login">
            <FaUserAlt size={32} />
          </Link>
        ) : (
          <>
            <Link to="/myproducts">
              <FaTags size={32} />
            </Link>
            <Link to="/logout" onClick={handleLogout}>
              <FaSignInAlt size={32} />
            </Link>
          </>
        )}
      </LogoutButton>
    </Header>
  );
}
