import styled from 'styled-components';

import * as colors from '../../config/color';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;

  ul li {
    display: inline-block;
    padding: 0.5em;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid ${colors.secondaryColor};
    color: ${colors.primaryColor};

    &.active {
      color: #fff;
      background-color: ${colors.secondaryColor};
    }
  }
`;
