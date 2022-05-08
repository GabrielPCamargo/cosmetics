import styled from 'styled-components';
import * as colors from '../../config/color';

export const Container = styled.div`
  padding-top: 3em;
  margin: 0 5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 75vw;
  margin: 0 auto;
`;

export const Title = styled.h3`
  margin: 1em 0;
  text-align: center;
  font-size: 1.5rem;

  a {
    margin-left: 1em;
  }
`;

export const NewProduct = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;

  a {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.primaryColor};
  }

  span {
    margin-right: 0.75em;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 121px);
`;
