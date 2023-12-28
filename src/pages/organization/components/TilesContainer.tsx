import { ReactNode } from 'react';

type TilesContainerProps = {
  children: ReactNode;
};

export const TilesContainer = ({ children }: TilesContainerProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 laptop:flex-row'>
      {children}
    </div>
  );
};
