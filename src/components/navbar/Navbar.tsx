export const Navbar = () => {
  return (
    <ul className='m-auto flex max-w-[1240px] items-center justify-evenly py-4 text-borderColor'>
      <a className='leading-6' href='#home'>
        HOME
      </a>
      <a className='leading-6' href='#about'>
        O NAS
      </a>
      <a className='leading-6' href='#wedding'>
        WESELE
      </a>
      <a className='leading-6' href='#info'>
        ORGANIZACJA
      </a>
      <a className='leading-6' href='#contact'>
        KONTAKT
      </a>
    </ul>
  );
};
