import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Tile = {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  imageSize?: number;
};
function Tile({ src, alt, children, className, imageSize }: Tile) {
  return (
    <div
      className={twMerge(
        'flex h-[200px] w-[90%] items-center justify-evenly gap-4 border-[1.5px] border-solid border-aboutHeader px-5 laptop:w-[400px]',
        className
      )}
    >
      <div className='flex items-center justify-center p-2 text-justify'>
        {children}
      </div>
      <img src={src} alt={alt} height={imageSize ?? 100}></img>
    </div>
  );
}

export default Tile;
