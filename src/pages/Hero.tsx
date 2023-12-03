import ringsIcon from '../assets/photos/ikona_obraczki.png';
import glassIcon from '../assets/photos/ikona_kieliszki.png';
import photo from '../assets/photos/pierwsze_przyciete.jpg';
import { ScreenImage } from '../components/ScreenImage';
import PageLayout from '../components/PageLayout';

export function Hero() {
  return (
    <PageLayout id='home'>
      <ScreenImage src={photo} alt='andrzej-kasia' className='object-left' />
      <div className='my-6 flex flex-1 flex-col items-center justify-evenly gap-8 laptop:mt-0 laptop:justify-between laptop:gap-16'>
        <div className='flex flex-col items-center'>
          <h1 className='text-center font-header text-7xl text-mainHeader laptop:text-left laptop:text-8xl'>
            Kasia i Andrzej
          </h1>
          <h3 className='text-xl font-medium italic laptop:text-3xl'>
            31 maja 2024, godzina 14:00
          </h3>
        </div>
        <div>
          <div className='box flex gap-20'>
            <div className='flex flex-col items-center justify-evenly uppercase laptop:justify-between laptop:gap-10'>
              <img
                src={ringsIcon}
                alt='rings'
                className='w-[80px] scale-75 laptop:scale-100'
              ></img>
              <img
                src={glassIcon}
                alt='rings'
                className='w-[80px] scale-75 laptop:scale-100'
              ></img>
            </div>
            <div className='flex flex-col justify-evenly gap-10 uppercase'>
              <div className='flex w-full flex-col justify-center'>
                <h4 className='max-w-sm text-center text-sm laptop:text-xl'>
                  Kościół Pw. Św. Barbary
                </h4>
                <h4 className='max-w-sm text-center text-sm laptop:text-xl'>
                  w Grodzisku Dolnym
                </h4>
              </div>
              <div className='flex w-full flex-col justify-center'>
                <h4 className='min-w-min text-center text-sm uppercase laptop:text-xl'>
                  VILLA PRESTO
                </h4>
                <h4 className='min-w-min text-center text-sm uppercase laptop:text-xl'>
                  BRZÓZA KRÓLEWSKA 1030
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
