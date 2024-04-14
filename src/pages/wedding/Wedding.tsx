import { PageLayout } from '@components/index';

import { LINKS } from '@src/constants';
import { Location } from './components';

export const Wedding = () => {
  return (
    <PageLayout id='wedding'>
      <img
        src='assets/photos/kwiaty3.png'
        alt='wedding_flowers'
        className='absolute -right-24 -top-16 z-10 h-[200px] scale-[65%] smallScreen:scale-[45%] laptop:-right-10 laptop:-top-10 laptop:scale-100'
        loading='lazy'
      />
      <div className='flex h-full w-full flex-col items-center justify-evenly p-10 smallScreen:p-2'>
        <div className='flex flex-col items-center'>
          <h1 className='p-6 text-center font-header text-8xl text-pastelRed smallScreen:text-6xl laptop:p-0'>
            Ślub i Wesele
          </h1>
          <h3 className='pt-4 font-info text-base font-medium laptop:text-xl'>
            31 maja 2024, godzina 14:00
          </h3>
        </div>
        <div className='laptop:gap:0 my-4 flex w-full flex-col items-center justify-evenly gap-4 laptop:my-0 laptop:flex-row'>
          <Location
            name='KOŚCIÓŁ PW. ŚW, BARBARY'
            description='GRODZISKO DOLNE 248'
            src='assets/photos/obraczki.png'
            alt='wedding_obraczki'
            mapsLink={LINKS.wedding}
          />
          <div className='w-[300px] py-4'>
            <h4 className='text-center text-lg font-bold'>
              Po ślubie zapraszamy serdecznie na przyjęcie weselne!
            </h4>
          </div>
          <Location
            name='VILLA PRESTO'
            description='BRZÓZA KRÓLEWSKA 1030'
            src='assets/photos/kieliszki.png'
            alt='wedding_kieliszki'
            mapsLink={LINKS.presto}
          />
        </div>
      </div>
    </PageLayout>
  );
};
