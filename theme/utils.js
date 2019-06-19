// @flow

import { css } from 'styled-components';

const bgImgCover = `
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const resetLinkColor = (color: string) => css`
  * > a {
    color: ${color};
  }
`;

export const utils = {
  bgImgCover,
  resetLinkColor,
};
