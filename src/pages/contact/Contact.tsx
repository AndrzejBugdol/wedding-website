import { ScreenImage, PageLayout } from '@components/index';
import { ContactTile } from './components';

export const Contact = () => {
  return (
    <PageLayout id='contact'>
      <div className='flex w-full flex-col items-center gap-6 pb-2 pt-10 laptop:w-3/6 laptop:gap-4 laptop:py-2'>
        <h1 className='font-header text-8xl text-pastelOrange smallScreen:text-6xl'>
          Kontakt
        </h1>
        <h3 className='px-4 pt-2 text-center text-base font-medium'>
          Prosimy o potwierdzenie przybycia do 20 kwietnia 2024r.
        </h3>
        <div className='flex w-full items-center justify-evenly'>
          <ContactTile title='Kasia' number={import.meta.env.VITE_K_NUMBER} />
          <ContactTile title='Andrzej' number={import.meta.env.VITE_A_NUMBER} />
        </div>
        <img
          src='assets/photos/kwiaty5.png'
          alt='contact_flowers'
          className='h-[100px] w-auto object-cover laptop:h-[140px]'
          loading='lazy'
        />
      </div>
      <ScreenImage src='assets/photos/teneryfa_przyciete.jpg' alt='contact' />
    </PageLayout>
  );
};
