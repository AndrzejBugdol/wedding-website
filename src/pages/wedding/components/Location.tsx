import { Link } from '@src/components';

type Location = {
  src: string;
  alt: string;
  name: string;
  description: string;
  mapsLink: string;
};

export const Location = ({
  src,
  alt,
  name,
  description,
  mapsLink,
}: Location) => {
  return (
    <div className='flex flex-col items-center justify-between gap-7'>
      <img
        src={src}
        alt={alt}
        className='h-[160px] smallScreen:h-[100px]'
        loading='lazy'
      ></img>
      <div className='flex flex-col items-center justify-center text-sm'>
        <h4 className='text-center font-bold'>{name}</h4>
        <h4 className='text-center'>{description}</h4>
      </div>
      <Link href={mapsLink} />
    </div>
  );
};
