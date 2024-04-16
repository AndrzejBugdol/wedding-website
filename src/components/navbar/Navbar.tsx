import { NavbarItem } from './NavbarItem';

export const Navbar = () => {
  return (
    <ul className='m-auto flex max-w-[1240px] items-center justify-evenly py-4 text-borderColor'>
      <NavbarItem title='HOME' href='#home' />
      <NavbarItem title='O NAS' href='#about' />
      <NavbarItem title='WESELE' href='#wedding' />
      <NavbarItem title='ORGANIZACJA' href='#info' />
      <NavbarItem title='DLA PRZYJEZDNYCH' href='#visitors' />
      <NavbarItem title='KONTAKT' href='#contact' />
    </ul>
  );
};
