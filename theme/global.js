// @flow

import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  * {
    font-family: Roboto;
    box-sizing: border-box;
  }
`;
