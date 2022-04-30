import styled from 'styled-components';
import { primaryColor } from '../../config/color';

export const Nav = styled.nav`
  a {
    color: ${primaryColor};
    margin: 0 2em;
    font-size: 1.15em;
    font-weight: bold;
  }
`;

export const Header = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Ubuntu:wght@300;400;700&display=swap');

  background: #e8eced;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${primaryColor};

  h1 {
    margin: 0 2em;
    font-family: Ubuntu;
    font-weight: 400;
    text-align: center;
    font-size: 2em;

    span {
      display: block;
      font-family: Manrope;
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

export const LogoutButton = styled.div`
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: right;

  a {
    color: ${primaryColor};
    margin-right: 2em;
  }
`;
