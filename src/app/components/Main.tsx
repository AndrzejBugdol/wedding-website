import Image from 'next/image';
import React from 'react';

import ringsIcon from '@/assets/photos/ikona_obraczki.png';
import glassIcon from '@/assets/photos/ikona_kieliszki.png';
import photo from '@/assets/photos/pierwsze_przyciete.jpg';
import { ScreenImage } from '@/components/ScreenImage';
import PageLayout from '@/components/PageLayout';

function Main() {
  return (
    <PageLayout id='home'>
      <ScreenImage src={photo} alt='andrzej-kasia' className='object-left' />
      <div className='flex flex-1 flex-col items-center justify-between gap-16'>
        <div className='flex flex-col items-center'>
          <h1 className='font-header text-8xl text-mainHeader'>
            Kasia E Andrzej
          </h1>
          <h3 className='text-3xl font-medium italic'>
            31 maja 2024, godzina 14:00
          </h3>
        </div>
        <div>
          <div className='box flex gap-20'>
            <div className='flex flex-col items-center justify-between gap-10 uppercase'>
              <Image src={ringsIcon} width={80} alt='rings'></Image>
              <Image src={glassIcon} width={80} alt='rings'></Image>
            </div>
            <div className='flex flex-col justify-evenly gap-10 uppercase'>
              <div className='flex w-full flex-col justify-center'>
                <h4 className='max-w-sm text-center text-xl'>
                  Kościół Pw. Św. Barbary
                </h4>
                <h4 className='max-w-sm text-center text-xl'>
                  w Grodzisku Dolnym
                </h4>
              </div>
              <div className='flex w-full flex-col justify-center'>
                <h4 className='min-w-min text-center text-xl uppercase'>
                  VILLA PRESTO
                </h4>
                <h4 className='min-w-min text-center text-xl uppercase'>
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

export default Main;
