import MenuBar from '@/components/MenuBar'
import './globals.css'
import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'

export const cormorantGarmond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'],style: ['italic','normal'] })
export const angellaWhite = localFont({src: '../assets/fonts/Angella White.otf'})

export const metadata: Metadata = {
  title: 'Kasia & Andrzej',
  description: 'Kasia & Andrzej - wedding website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cormorantGarmond.className}>
        <MenuBar />
        {children}
        </body>
    </html>
  )
}
