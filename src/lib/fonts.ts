import { Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';

export const cormorantGarmond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic', 'normal'],
});

export const angellaWhite = localFont({
  src: '../assets/fonts/Angella White.otf',
});
