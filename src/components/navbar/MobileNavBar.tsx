import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const mobileNavbarClasses =
  'absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center';

export const MobileNavBar = () => {
  const [navCollapse, setNavCollapse] = useState(false);

  const handleNavChange = () => {
    setNavCollapse(!navCollapse);
  };

  return (
    <>
      <div
        className='fixed left-5 top-5 z-10 block p-1'
        onClick={handleNavChange}
      >
        {navCollapse ? (
          <AiOutlineClose size={35} className='text-pastelRed' />
        ) : (
          <AiOutlineMenu size={35} className='text-pastelRed' />
        )}
      </div>
      <div
        className={
          navCollapse
            ? `${mobileNavbarClasses}`
            : `${mobileNavbarClasses} hidden`
        }
      >
        <ul className='text-semibold flex h-full w-full flex-col justify-center gap-8 bg-white p-4 pt-6 text-pastelRed'>
          <a className='leading-6' href='#about' onClick={handleNavChange}>
            O NAS
          </a>
          <a className='leading-6' href='#wedding' onClick={handleNavChange}>
            WESELE
          </a>
          <a className='leading-6' href='#info' onClick={handleNavChange}>
            ORGANIZACJA
          </a>
          <a className='leading-6' href='#visitors' onClick={handleNavChange}>
            DLA PRZYJEZDNYCH
          </a>
          <a className='leading-6' href='#contact' onClick={handleNavChange}>
            KONTAKT
          </a>
        </ul>
      </div>
    </>
  );
};
