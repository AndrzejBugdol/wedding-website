'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const mobileNavbarClasses =
  'absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center laptop:hidden';

function MenuBar() {
  const [navCollapse, setNavCollapse] = useState(false);

  const handleNavChange = () => {
    setNavCollapse(!navCollapse);
  };
  return (
    <div className='fixed left-0 top-0 z-20 w-full bg-white tracking-widest duration-300 ease-in'>
      <ul className='m-auto hidden max-w-[1240px] items-center justify-evenly py-4 text-borderColor laptop:flex'>
        <Link className='leading-6' href='#home' onClick={handleNavChange}>
          HOME
        </Link>
        <Link className='leading-6' href='#about' onClick={handleNavChange}>
          O NAS
        </Link>
        <Link className='leading-6' href='#wedding' onClick={handleNavChange}>
          WESELE
        </Link>
        <Link className='leading-6' href='#info' onClick={handleNavChange}>
          ORGANIZACJA
        </Link>
        <Link className='leading-6' href='#contact' onClick={handleNavChange}>
          KONTAKT
        </Link>
      </ul>

      <div
        className='fixed left-5 top-5 z-10 block p-1 laptop:hidden'
        onClick={handleNavChange}
      >
        {navCollapse ? (
          <AiOutlineClose size={35} />
        ) : (
          <AiOutlineMenu size={35} />
        )}
      </div>
      <div
        className={
          navCollapse
            ? `${mobileNavbarClasses}`
            : `${mobileNavbarClasses} hidden`
        }
      >
        <ul className='flex h-full w-full flex-col justify-center gap-8 bg-borderColor p-4 pt-6 text-weddingHeader'>
          <Link className='leading-6' href='#about' onClick={handleNavChange}>
            O NAS
          </Link>
          <Link className='leading-6' href='#wedding' onClick={handleNavChange}>
            WESELE
          </Link>
          <Link className='leading-6' href='#info' onClick={handleNavChange}>
            ORGANIZACJA
          </Link>
          <Link className='leading-6' href='#contact' onClick={handleNavChange}>
            KONTAKT
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
