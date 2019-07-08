// @flow

import { colors } from './colors';
import { media } from './media-queries';
import { typography } from './typography';
import { layout } from './layout';
import { utils } from './utils';
import { resets } from './resets';

const appTheme = {
  ...typography,
  ...layout,
  colors: { ...colors },
  utils: { ...utils },
  media,
  resets,
};

export { media, resets };
export default appTheme;
