import Location from '@components/Location';
import PageLayout from '@components/PageLayout';
import ringsIcon from '@assets/photos/obraczki.png';
import glassIcon from '@assets/photos/kieliszki.png';
import flowersPhoto from '@assets/photos/kwiaty3.png';

import { LINKS } from '@src/constants';

export function Wedding() {
  return (
    <PageLayout id='wedding'>
      <img
        src={flowersPhoto}
        alt='wedding_flowers'
        className='absolute -right-24 -top-16 z-10 h-[200px] scale-[65%] smallScreen:scale-[45%] laptop:-right-10 laptop:-top-10 laptop:scale-100'
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
            src={ringsIcon}
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
            src={glassIcon}
            alt='wedding_kieliszki'
            mapsLink={LINKS.presto}
          />
        </div>
      </div>
    </PageLayout>
  );
}
