import MenuBar from '@/components/MenuBar';
import './globals.css';
import type { Metadata } from 'next';
import { angellaWhite, cormorantGarmond } from '@/lib/fonts';
import { twMerge } from 'tailwind-merge';

export const metadata: Metadata = {
  title: 'Kasia & Andrzej',
  description: 'Kasia & Andrzej - wedding website',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={twMerge(angellaWhite.variable, cormorantGarmond.className)}
      >
        <MenuBar />
        <div className='flex flex-col items-center gap-4 laptop:block laptop:gap-0'>
          {children}
        </div>
      </body>
    </html>
  );
}
