import styled from 'styled-components';

import * as colors from '../../config/color';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;

  label {
    background: #e8eced;
    padding-left: 20px;
    height: fit-content;
    display: flex;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(6, 44, 48, 0.5);
  }

  input {
    background: inherit;
    height: 24px;
    border: none;
    width: 30vw;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    font-size: 1.5em;
  }

  input::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  div {
    background: ${colors.primaryColor};
    color: #fff;
    padding: 0.5em 0.85em;
    cursor: pointer;
  }
`;
