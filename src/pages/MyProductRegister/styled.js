import styled from 'styled-components';

import * as colors from '../../config/color';

export const Title = styled.h1`
  background: red;
`;

export const Container = styled.div`
  width: 30vw;
  margin: 5em auto;
  margin-top: 0;
  text-align: center;

  h3 {
    margin: 3rem 0;
    font-size: 1.5em;
  }

  h4 {
    margin-top: 2em;
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
  }

  a button {
    margin-top: 2em;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25em;
    padding: 0.5em 2em;
    border-radius: 15px;
    background: ${colors.secondaryColor};
  }
`;

export const Form = styled.form`
  background: #fff;
  border: 1px solid #b0b0b0;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  padding-bottom: 5em;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  input[type='file'] {
    display: none;
  }

  h3 {
    padding: 2em 0;
    font-size: 2em;
  }

  input {
    display: block;
    margin: 2em auto;
    width: 70%;
    height: 3em;
    border-radius: 10px;
    border: 2px solid #2c698d;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
    padding-left: 1.5em;
  }

  input::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  button {
    display: block;
    margin: 0 auto;
    margin-top: 3em;
    width: 35%;
    background: ${colors.secondaryColor};
    font-style: normal;
    font-weight: 500;
    font-size: 1.3em;
  }

  svg {
    margin-top: 4em;
  }
`;
