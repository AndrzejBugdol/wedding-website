import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';

type Tile = {
  src: StaticImageData;
  alt: string;
  children: ReactNode;
  className?: string;
  imageSize?: number;
};
function Tile({ src, alt, children, className, imageSize }: Tile) {
  return (
    <div
      className={twMerge(
        'flex h-[200px] w-[400px] items-center justify-evenly gap-4 border-[1.5px] border-solid border-aboutHeader px-5',
        className
      )}
    >
      <div className='flex items-center justify-center p-2 text-justify'>
        {children}
      </div>
      <Image src={src} alt={alt} height={imageSize ?? 100}></Image>
    </div>
  );
}

export default Tile;
