import styled from 'styled-components';

export const Container = styled.div`
  width: 20vw;
  background: #fff;
  border: 2px solid rgba(39, 38, 67, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  overflow: hidden;
  margin-bottom: 3em;

  &:nth-child(n + 4) {
    margin-top: 5em;
  }

  h3 {
    margin-top: 1em;
    margin-left: 1em;
    font-style: normal;
    font-weight: 300;
  }

  div {
    margin-top: 1em;
    margin-left: 1em;
    font-weight: 700;
    font-size: 1.25em;
  }

  img {
    width: 100%;
    border-bottom: 1px solid #272643;
  }

  button {
    display: block;
    margin: 1.25em auto;
    text-align: center;
    font-size: 1.15em;
    padding: 0.75em 1.25em;
  }

  .functions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .functions button {
    margin: 0;
    padding: 0;
    background: inherit;
    margin: 0.75em 2em;
  }

  .edit {
    color: #85d336;
  }

  .delete {
    color: #c30e02;
  }
`;
