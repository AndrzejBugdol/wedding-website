import { useIntersection } from '@src/context/IntersectionContext';
import { useElementOnScreen } from '@src/hooks/useElementOnScreen';
import { useCallback, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  id?: React.HTMLAttributes<HTMLDivElement>['id'];
};

const options: IntersectionObserverInit = {
  threshold: 0.5,
  rootMargin: '0px',
};

export const PageLayout = ({ children, id, className }: PageLayoutProps) => {
  const { containerRef, isVisible } = useElementOnScreen(options);
  const { setRefHash } = useIntersection();

  const updateRef = useCallback(() => {
    setRefHash(containerRef);
  }, [containerRef, setRefHash]);

  useEffect(() => {
    if (isVisible) {
      const scrollTimeout = setTimeout(updateRef, 300);
      return () => {
        clearTimeout(scrollTimeout);
      };
    }
  }, [containerRef, isVisible, setRefHash, updateRef]);

  return (
    <div
      className='flex w-full items-start justify-center p-5 laptop:flex laptop:h-[800px] laptop:items-center'
      id={id}
      ref={containerRef}
    >
      <div
        className={twMerge(
          'relative flex w-[90vw] flex-col items-center justify-center gap-0 border-[1.5px] border-solid border-borderColor border-opacity-25 laptop:h-[70%] laptop:w-[1024px] laptop:flex-row laptop:border-[1.5px]',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
