import { twMerge } from 'tailwind-merge';

type ScreenImageProps = Partial<HTMLImageElement> & {
  bg?: string;
  className?: string;
};

export const ScreenImage = ({ src, alt, bg, className }: ScreenImageProps) => {
  return (
    <div className={`flex laptop:h-full laptop:w-auto ${bg}`}>
      <img
        className={twMerge(
          className,
          'h-auto w-full object-contain laptop:mt-0 laptop:h-full laptop:w-auto laptop:object-cover'
        )}
        src={src}
        alt={alt}
        loading='lazy'
      />
    </div>
  );
};
