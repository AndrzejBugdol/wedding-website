import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Tile = {
  image: ReactNode;
  children: ReactNode;
  className?: string;
};

function Tile({ image, children, className }: Tile) {
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
      {image}
    </div>
  );
}

export default Tile;
