// @flow

import { css } from 'styled-components';
import { media } from './media-queries';

const baseSpacing = 8;
const contentMaxWidth = 160 * baseSpacing;
const contentPadding = 10 * baseSpacing;
const mobilePadding = 5 * baseSpacing;

const setSpacing = (num: number) => num * baseSpacing;

const contentContainer = css`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${mobilePadding}px;

  ${media.desktop`
    max-width: ${contentMaxWidth}px;
    margin: 0 auto;
    padding: 0 ${contentPadding}px;
  `}
`;

const fullWidthSection = css`
  margin: 0 ${-(mobilePadding)}px;

  ${media.desktop`
    max-width: 100%;
    margin: 0 ${-(contentPadding)}px;
  `}
`;

const fullWidthMobileOnly = css`
  margin: 0 ${-(mobilePadding)}px;
`;

const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const layout = {
  contentContainer,
  fullWidthSection,
  fullWidthMobileOnly,
  setSpacing,
  baseSpacing,
  absoluteCenter,
};
