import { ReactNode } from 'react';

type VisitorsSectionProps = {
  title: string;
  children: ReactNode;
};

export const VisitorsSection = ({ title, children }: VisitorsSectionProps) => {
  return (
    <div className='flex flex-col items-center border-[1.5px] border-solid border-pastelOrange py-2 laptop:w-[400px]'>
      <h3 className='p-2 text-center text-2xl font-bold uppercase text-pastelRed smallScreen:text-xl laptop:p-2'>
        {title}
      </h3>
      <ul className='list-disc px-8 text-justify'>{children}</ul>
    </div>
  );
};
