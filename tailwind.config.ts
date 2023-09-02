import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    },
  },
  plugins: [],
};
export default config;
