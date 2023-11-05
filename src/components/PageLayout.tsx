import { twMerge } from 'tailwind-merge';

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  id?: React.HTMLAttributes<HTMLDivElement>['id'];
};

function PageLayout({ children, id, className }: PageLayoutProps) {
  return (
    <div
      className='block items-start justify-center laptop:flex laptop:h-[800px] laptop:items-center'
      id={id}
    >
      <div
        className={twMerge(
          'relative flex w-[425px] flex-col items-center justify-center gap-0 border-b-[1.5px] border-solid border-borderColor border-opacity-25 laptop:h-[70%] laptop:w-[1024px] laptop:flex-row laptop:border-[1.5px]',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
