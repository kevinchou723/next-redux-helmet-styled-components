// @flow

import { colors } from './colors';
import { media } from './media-queries';
import { typography } from './typography';
import { layout } from './layout';
import { utils } from './utils';

const appTheme = {
  ...typography,
  ...layout,
  colors: { ...colors },
  utils: { ...utils },
  media,
};

export { media };
export default appTheme;
