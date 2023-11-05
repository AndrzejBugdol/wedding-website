import React from 'react';
import keyIcon from '../../assets/photos/ikona klucze.png';
import kidIcon from '../../assets/photos/ikona dziecko.png';
import busIcon from '../../assets/photos/ikona_autobus.png';
import flowersIcon from '../../assets/photos/ikona_kwiatki.png';
import flowersPhoto from '../../assets/photos/kwiaty4.png';

import PageLayout from '@/components/PageLayout';
import Tile from '@/components/Tiles';
import Image from 'next/image';

function Organization() {
  return (
    <PageLayout id='home'>
      <Image
        src={flowersPhoto}
        alt='org_flowers'
        height={200}
        className='laptop-0 absolute -right-14 -top-10 -z-10 scale-75 laptop:right-0 laptop:scale-0'
      />
      <div className='mb-4 flex h-full w-full flex-col items-center justify-evenly laptop:mb-0'>
        <div className='flex flex-col items-center'>
          <h1 className='p-8 font-header text-8xl text-weddingHeader laptop:p-0'>
            Organizacja
          </h1>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center justify-center gap-6 laptop:flex-row'>
            <Tile src={keyIcon} alt='org_key' className='h-[150px]'>
              <h4>
                Dla wszystkich gości przyjezdnych ze Śląska oraz Krakowa
                zapewniamy nocleg oraz śniadanie w Domu Pielgrzyma w Leżajsku.
              </h4>
            </Tile>
            <Tile
              src={kidIcon}
              alt='org_kid'
              imageSize={80}
              className='h-[150px]'
            >
              <h4>
                Zapraszamy najmłodszych na wesele! Od 18:00 do 21:00 na sali
                będzie animator, który zajmie się pociechami.
              </h4>
            </Tile>
          </div>
          <div className='flex flex-col items-center justify-center gap-6 laptop:flex-row'>
            <Tile
              src={busIcon}
              alt='org_bus'
              className='flex-col-reverse gap-0'
              imageSize={50}
            >
              <h4>
                Zapewniamy transport z Domu Pielgrzyma do kościoła oraz spod
                kościoła do sali weselnej dla{' '}
                <strong>wszystkich chętnych gości weselnych.</strong> Po północy
                będą również kursowały busy, odwożące gości do Domu Pielgrzyma.
              </h4>
            </Tile>
            <Tile
              src={flowersIcon}
              alt='org_flowers'
              className='flex-row-reverse'
            >
              <h4>
                <strong>Zamiast kwiatów będzie nam miło otrzymać:</strong>
                <br /> - butelki wina do własnej domowej piwniczki <br />-
                wpłaty na bliską naszym sercom Wielką Orkiestrę Świątecznej
                Pomocy: Link do płatności
              </h4>
            </Tile>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Organization;
