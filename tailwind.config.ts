import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      header: ['__angellaWhite_64efad', 'sans-serif'],
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
export default config;
