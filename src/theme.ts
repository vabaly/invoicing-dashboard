'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#005af8',
        },
        info: {
          main: '#9a1bf9',
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-ibm)',
  },
  cssVariables: true,
});

export default theme;
