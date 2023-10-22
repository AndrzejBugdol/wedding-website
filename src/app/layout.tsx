import MenuBar from '@/components/MenuBar';
import './globals.css';
import type { Metadata } from 'next';
import { cormorantGarmond } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Kasia & Andrzej',
  description: 'Kasia & Andrzej - wedding website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={cormorantGarmond.className}>
        <MenuBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
