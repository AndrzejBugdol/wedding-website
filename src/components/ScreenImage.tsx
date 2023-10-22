import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';

type ScreenImageProps = {
  src: StaticImageData;
  alt: string;
  bg?: string;
  className?: string;
};

export const ScreenImage = ({ src, alt, bg, className }: ScreenImageProps) => {
  return (
    <div className={`flex laptop:h-full laptop:w-auto ${bg}`}>
      <Image
        className={twMerge(
          className,
          'object-top laptop:mt-0 laptop:w-full laptop:object-cover'
        )}
        src={src}
        alt={alt}
      ></Image>
    </div>
  );
};
