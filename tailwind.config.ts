import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm)', ...fontFamily.sans],
      },
      colors: {
        primary: '#005af8',
        gray: {
          100: '#f0f0f0',
          300: '#e2e5f1',
          400: '#d4d7e5',
          500: '#b4b7c9',
          600: '#9397ad',
          700: '#005af8',
          800: '#005af8',
          900: '#03154b',
        },
        error: '#ef4444',
        success: '#36c7aa',
        warning: '#feaf2d',
        info: '#9a1bf9',
      },
    },
  },
  plugins: [],
} satisfies Config;
