import { useEffect, useState } from 'react';
import { MobileNavBar } from './MobileNavBar';
import { Navbar } from './Navbar';

const checkIfMobile = (width: number) => {
  return width < 900;
};

export const MenuBar = () => {
  const [isMobile, setIsMobile] = useState(checkIfMobile(window.innerWidth));

  useEffect(() => {
    function handleWindowResize() {
      setIsMobile(checkIfMobile(window.innerWidth));
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='fixed left-0 top-0 z-20 w-full bg-white tracking-widest duration-300 ease-in'>
      {isMobile ? <MobileNavBar /> : <Navbar />}
    </div>
  );
};
