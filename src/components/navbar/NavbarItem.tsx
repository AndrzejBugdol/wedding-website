import { useIntersection } from '@src/context/IntersectionContext';

type NavbarItemProps = {
  title: string;
  href: string;
};

export const NavbarItem = ({ href, title }: NavbarItemProps) => {
  const { refHash, navigate } = useIntersection();

  const handleOnClick = () => {
    navigate(href);
  };

  return (
    <a
      className={`leading-6 hover:cursor-pointer ${
        href === refHash && 'border-b-[1.5px] border-solid border-pastelRed'
      }`}
      onClick={handleOnClick}
    >
      {title}
    </a>
  );
};
