import styled from 'styled-components';

import * as colors from '../../config/color';

export const Title = styled.h1`
  background: red;
`;

export const Container = styled.div`
  width: 30vw;
  margin: 5em auto;
  text-align: center;

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
  background: #c4c4c4;
  border-radius: 50px;
  padding-bottom: 5em;

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
`;
