import React from 'react';
import Location from '@/components/Location';
import PageLayout from '@/components/PageLayout';
import ringsIcon from '../../assets/photos/obraczki.png';
import glassIcon from '../../assets/photos/kieliszki.png';
import flowersPhoto from '../../assets/photos/kwiaty3.png';

import Image from 'next/image';

function Wedding() {
  return (
    <PageLayout id='wedding'>
      <Image
        src={flowersPhoto}
        alt='wedding_flowers'
        height={200}
        className='absolute -right-10 -top-10 z-10 mix-blend-screen'
      />
      <div className='flex h-full w-full flex-col items-center justify-evenly'>
        <div className='flex flex-col items-center'>
          <h1 className='font-header text-8xl text-weddingHeader'>
            Ślub i Wesele
          </h1>
          <h3 className='text-3xl font-medium italic'>
            31.05.2024 godzina 14:00
          </h3>
        </div>
        <div className='flex w-full items-center justify-evenly'>
          <Location
            name='KOŚCIÓŁ PW. ŚW, BARBARY'
            description='GRODZISKO DOLNE 248'
            src={ringsIcon}
            alt='wedding_obraczki'
            mapsLink='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
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
            mapsLink='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default Wedding;
