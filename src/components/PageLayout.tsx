import { twMerge } from 'tailwind-merge';

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  id?: React.HTMLAttributes<HTMLDivElement>['id'];
};

function PageLayout({ children, id, className }: PageLayoutProps) {
  return (
    <div className='flex h-screen items-center justify-center' id={id}>
      <div
        className={twMerge(
          'flex aspect-video h-[80%] items-center justify-center gap-0 border-[1.5px] border-solid border-borderColor border-opacity-25',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
