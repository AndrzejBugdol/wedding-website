import { twMerge } from 'tailwind-merge';

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  id?: React.HTMLAttributes<HTMLDivElement>['id'];
};

function PageLayout({ children, id, className }: PageLayoutProps) {
  return (
    <div className='flex h-[800px] items-center justify-center' id={id}>
      <div
        className={twMerge(
          'relative flex h-[70%] w-[1024px] items-center justify-center gap-0 border-[1.5px] border-solid border-borderColor border-opacity-25',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
