import { type debounce } from 'lodash';

export const DEBOUNCE_PARAMS: [
  Parameters<typeof debounce>[1],
  Parameters<typeof debounce>[2],
] = [
  300,
  {
    leading: true,
    trailing: false,
  },
];

export const HEADER_HEIGHT = 105;
export const FOOTER_HEIGHT = 64;
export const SPACING_HEIGHT = 16;
