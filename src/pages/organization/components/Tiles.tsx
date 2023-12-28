import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const imageVariants = {
  '50': 'h-[50px]',
  '80': 'h-[80px]',
  '100': 'h-[100px]',
  '100-responsive': 'h-[100px] smallScreen:h-[70px]',
};

type Tile = {
  variant: keyof typeof imageVariants;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  className?: string;
};

export const Tile = ({
  imageSrc,
  imageAlt,
  variant,
  children,
  className,
}: Tile) => {
  return (
    <div
      className={twMerge(
        'flex h-[200px] w-[90%] items-center justify-evenly gap-4 border-[1.5px] border-solid border-pastelOrange px-5 smallScreen:h-[300px] smallScreen:flex-col-reverse laptop:w-[400px]',
        className
      )}
    >
      <div className='flex items-center justify-center p-2 text-justify'>
        {children}
      </div>
      <img src={imageSrc} alt={imageAlt} className={imageVariants[variant]} />
    </div>
  );
};
