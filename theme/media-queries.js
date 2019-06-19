// @flow

import { css } from 'styled-components';

// Media Queries
// Mobile-first responsive design

export const sizes = {
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1280,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
