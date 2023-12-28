import { useIntersection } from '@src/context/intersectionContext';

type NavbarItemProps = {
  title: string;
  href: string;
};

export const NavbarItem = ({ href, title }: NavbarItemProps) => {
  const { refHash } = useIntersection();

  return (
    <a
      className={`leading-6 ${
        href === refHash
          ? 'border-b-[1.5px] border-solid border-pastelOrange'
          : ''
      }`}
      href={href}
    >
      {title}
    </a>
  );
};
