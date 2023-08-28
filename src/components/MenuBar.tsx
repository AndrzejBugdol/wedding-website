import Link from 'next/link';
import React from 'react';

function MenuBar() {
  return (
    <div className='absolute right-0 top-0 mt-8 w-3/6'>
      <ul className='hidden items-center justify-center gap-14 md:flex'>
        <Link className='leading-6' href='#about'>
          O NAS
        </Link>
        <Link className='leading-6' href='#wedding'>
          WESELE
        </Link>
        <Link className='leading-6' href='#info'>
          ORGANIZACJA
        </Link>
        <Link className='leading-6' href='#contact'>
          KONTAKT
        </Link>
      </ul>
    </div>
  );
}

export default MenuBar;
