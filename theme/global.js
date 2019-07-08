// @flow

import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-family: "GroteskBold";
    font-display: auto;
    src: url('/static/fonts/PxGrotesk-Bold.woff');
  }

  * {
    font-family: 'GroteskBold';
    box-sizing: border-box;
  }
`;
