type LinkProps = {
  href: string;
};

export const Link = ({ href }: LinkProps) => {
  return (
    <a
      href={href}
      target='_blank'
      className='tracking-wider underline hover:text-pastelPink'
    >
      MAPY GOOGLE
    </a>
  );
};
