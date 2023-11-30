import { Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';

export const cormorantGarmond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['italic', 'normal'],
});

export const angellaWhite = localFont({
  src: '../../public/fonts/Angella White.otf',
  variable: '--angellaWhite',
  preload: true,
});