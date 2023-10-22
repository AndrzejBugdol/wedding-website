'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const mobileNavbarClasses =
  'absolute flex items-center justify-center text-center duration-300 ease-in laptop:hidden';

function MenuBar() {
  const [navCollapse, setNavCollapse] = useState(false);

  const handleNavChange = () => {
    setNavCollapse(!navCollapse);
  };
  return (
    <div className='fixed left-0 top-0 z-10 w-full bg-white tracking-widest duration-300 ease-in'>
      <ul className='m-auto hidden max-w-[1240px] items-center justify-evenly py-4 text-borderColor laptop:flex'>
        <Link className='leading-6' href='#home'>
          HOME
        </Link>
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

      <div
        className='fixed left-0 top-0 z-10 block p-1 laptop:hidden'
        onClick={handleNavChange}
      >
        {navCollapse ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <div
        className={
          navCollapse
            ? `${mobileNavbarClasses}`
            : `${mobileNavbarClasses} left-[-300px]`
        }
      >
        <ul className='flex flex-col gap-8 bg-borderColor p-4 pt-6 text-weddingHeader'>
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
    </div>
  );
}

export default MenuBar;
