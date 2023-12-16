import photo from '@assets/photos/teneryfa_przyciete.jpg';
import flowersPhoto from '@assets/photos/kwiaty5.png';
import { ScreenImage } from '@components/ScreenImage';
import PageLayout from '@components/PageLayout';

function formatNumber(number: string | undefined) {
  const match = number?.toString().match(/^(\d{3})(\d{3})(\d{3})/);
  return `+48 ${match?.[1]} ${match?.[2]} ${match?.[3]} `;
}

export function Contact() {
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
          <div className='flex h-[150px] w-[150px] flex-col items-center justify-center gap-6 border-2 border-solid border-pastelOrange border-opacity-50 smallScreen:h-[120px] smallScreen:w-[120px] smallScreen:gap-2'>
            <h1 className='font-header text-4xl text-pastelOrange laptop:text-5xl'>
              Kasia
            </h1>
            <p className='text-center font-info text-xs smallScreen:text-[12px]'>
              {formatNumber(import.meta.env.VITE_K_NUMBER)}
            </p>
          </div>
          <div className='flex h-[150px] w-[150px] flex-col items-center justify-center gap-6 border-2 border-solid border-pastelOrange border-opacity-50 smallScreen:h-[120px] smallScreen:w-[120px] smallScreen:gap-2'>
            <h1 className='font-header text-4xl text-pastelOrange laptop:text-5xl'>
              Andrzej
            </h1>
            <p className='text-center font-info text-xs smallScreen:text-[12px]'>
              {formatNumber(import.meta.env.VITE_A_NUMBER)}
            </p>
          </div>
        </div>
        <img
          src={flowersPhoto}
          alt='contact_flowers'
          className='h-[100px] w-fit laptop:h-[140px]'
        />
      </div>
      <ScreenImage src={photo} alt='contact' />
    </PageLayout>
  );
}
