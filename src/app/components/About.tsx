import React from 'react';
import photo from '@/assets/photos/naszahistoria_przyciete.jpg';
import { ScreenImage } from '@/components/ScreenImage';
import PageLayout from '@/components/PageLayout';

function About() {
  return (
    <PageLayout id='about' className='justify-between'>
      <div className='flex w-3/6 flex-col items-center justify-start gap-6'>
        <h1 className='font-header text-8xl text-aboutHeader'>
          Nasza historia
        </h1>
        <div className='flex w-3/6  items-center justify-center '>
          <h4 className='text-base text-baseColor'>
            Poznaliśmy się w 2017 roku w organizacji studenckiej. W czerwcu 2017
            roku zostaliśmy parą i (xXX) <br />
            <br /> Zaręczyliśmy się 31 maja 2023 roku w pięknej włoskiej
            miejscowości Alberobello, do której zawsze chcieliśmy wrócić. <br />
            <br />
            Nasz ślub odbędzie się dokładnie w rocznicę zaręczyn i kilkanaście
            dni przed naszą 7 rocznicą związku!
          </h4>
        </div>
      </div>
      <ScreenImage src={photo} alt='about' />
    </PageLayout>
  );
}

export default About;
