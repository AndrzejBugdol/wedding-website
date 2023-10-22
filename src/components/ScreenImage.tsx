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
    <div className={`flex h-full ${bg}`}>
      <Image
        className={twMerge(className, 'max-h-full w-full object-cover')}
        src={src}
        alt={alt}
      ></Image>
    </div>
  );
};
