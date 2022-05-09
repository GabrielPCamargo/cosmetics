import styled from 'styled-components';
import * as colors from '../../config/color';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  background: #fff;
  width: 40vw;
  padding: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(39, 38, 67, 0.5);
  border-radius: 20px;
  margin: 5em 0;
  color: ${colors.primaryColor};

  h2 {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-style: bold;
    font-size: 2.5em;
    margin: 1em 0;
  }

  p {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    text-align: justify;
    font-size: 1.25em;
  }

  img {
    width: 80%;
    margin: auto;
  }

  div {
    width: 100%;
    text-align: start;
    font-family: 'Ubuntu';

    .price {
      font-style: normal;
      font-weight: 700;
      font-size: 2.5em;
      margin: 0.5em 0;
    }

    p {
      margin: 1em 0;
      display: flex;
      align-items: center;
      font-style: normal;
      font-style: bold;
      font-weight: 500;

      svg {
        margin-right: 0.5em;
      }
    }
  }
`;
