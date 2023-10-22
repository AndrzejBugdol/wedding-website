import React from 'react';
import photo from '@/assets/photos/naszahistoria_przyciete.jpg';
import flowersPhoto from '@/assets/photos/kwiaty2_przyciete.png';
import { ScreenImage } from '@/components/ScreenImage';
import PageLayout from '@/components/PageLayout';
import Image from 'next/image';

function About() {
  return (
    <PageLayout id='about' className='justify-between'>
      <div className='flex h-full w-3/6 flex-col items-center justify-between'>
        <h1 className='pt-8 font-header text-8xl text-aboutHeader'>
          Nasza historia
        </h1>
        <div className='flex items-center  justify-center px-16 '>
          <h4 className='text-justify text-base text-baseColor'>
            Poznaliśmy się w 2017 roku w organizacji studenckiej. W czerwcu 2017
            roku zostaliśmy parą i (xXX) <br />
            <br /> Zaręczyliśmy się 31 maja 2023 roku w pięknej włoskiej
            miejscowości Alberobello, do której zawsze chcieliśmy wrócić. <br />
            <br />
            Nasz ślub odbędzie się dokładnie w rocznicę zaręczyn i kilkanaście
            dni przed naszą 7 rocznicą związku!
          </h4>
        </div>
        <Image src={flowersPhoto} alt='about_flowers' height={150} />
      </div>
      <ScreenImage src={photo} alt='about' />
    </PageLayout>
  );
}

export default About;
