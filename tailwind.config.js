/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  container: {
    center: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      header: ['AngellaWhite', 'sans-serif'],
    },
    colors: {
      mainHeader: '#D6A1E6',
      aboutHeader: '#E7ABA1',
      weddingHeader: '#F3A5A5',
      baseColor: '#644F44',
      test: '#DADADA',
      borderColor: '#334155',
      white: '#fff',
    },
    screens: {
      smallScreen: '425px',
      mobile: '800px',
      laptop: '900px',
      ...defaultTheme.screens,
    },
    spacing: {
      '800px': '800px',
      '1024px': '1024px',
      ...defaultTheme.spacing,
    },
  },
  plugins: [],
};
