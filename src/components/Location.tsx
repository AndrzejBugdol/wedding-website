import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Location = {
  src: StaticImageData;
  alt: string;
  name: string;
  description: string;
  mapsLink: string;
};
function Location({ src, alt, name, description, mapsLink }: Location) {
  return (
    <div className='flex flex-col items-center justify-between gap-7'>
      <Image src={src} alt={alt} height={160}></Image>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='text-center font-bold'>{name}</h4>
        <h4 className='text-center'>{description}</h4>
      </div>
      <a href={mapsLink} target='_blank' className='tracking-wider'>
        MAPY GOOGLE
      </a>
    </div>
  );
}

export default Location;
