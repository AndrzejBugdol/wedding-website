import Link from 'next/link'
import React from 'react'

function MenuBar() {
  return (
    <div className='absolute right-0 top-0 mt-8 w-3/6'>
        <ul className='flex items-center justify-center gap-9'>
            <Link href='#about'>O NAS</Link>
            <Link href='#wedding'>WESELE</Link>
            <Link href='#info'>ORGANIZACJA</Link>
            <Link href='#contact'>KONTAKT</Link>
        </ul>
    </div>
  )
}

export default MenuBar