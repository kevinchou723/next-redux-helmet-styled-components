// @flow

import {
  SET_EXAMPLE_TEXT,
} from '../action-types/example-action-types';

export const setExampleText = (text: string) => ({
  type: SET_EXAMPLE_TEXT,
  payload: {
    text,
  },
});
