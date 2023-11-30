import React from 'react';
import Location from '@/components/Location';
import PageLayout from '@/components/PageLayout';
import ringsIcon from '../../assets/photos/obraczki.png';
import glassIcon from '../../assets/photos/kieliszki.png';
import flowersPhoto from '../../assets/photos/kwiaty3.png';

import Image from 'next/image';
import { LINKS } from '../constants';

function Wedding() {
  return (
    <PageLayout id='wedding'>
      <Image
        src={flowersPhoto}
        alt='wedding_flowers'
        height={200}
        className='absolute -right-20 -top-14 z-10 scale-50 mix-blend-screen laptop:-right-10 laptop:-top-10 laptop:scale-100'
      />
      <div className='flex h-full w-full flex-col items-center justify-evenly p-10'>
        <div className='flex flex-col items-center'>
          <h1 className='p-6 text-center font-header text-8xl text-weddingHeader laptop:p-0'>
            Ślub i Wesele
          </h1>
          <h3 className='text-3xl font-medium italic'>
            31.05.2024 godzina 14:00
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
          <div className='w-[200px]'>
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

export default Wedding;
