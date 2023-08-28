import { angellaWhite } from '@/app/layout'
import React from 'react'

function Main() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='flex items-center justify-center w-3/6'>Foto</div>
        <div className='flex flex-col items-center justify-center w-3/6 gap-6'>
            <h1 className={`${angellaWhite.className} text-8xl text-heading`}>Kasia E Andrzej</h1>
            <h3 className='text-3xl italic font-medium'>31 maja 2024, godzina 14:00</h3>
        </div>
    </div>
  )
}

export default Main;
