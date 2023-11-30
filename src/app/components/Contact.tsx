import React from 'react';
import photo from '@/assets/photos/teneryfa_przyciete.jpg';
import flowersPhoto from '@/assets/photos/kwiaty5.png';
import { ScreenImage } from '@/components/ScreenImage';
import PageLayout from '@/components/PageLayout';
import Image from 'next/image';

function formatNumber(number: string | undefined) {
  const match = number?.toString().match(/^(\d{3})(\d{3})(\d{3})/);
  return `${match?.[1]} ${match?.[2]} ${match?.[3]} `;
}

function Contact() {
  return (
    <PageLayout id='contact'>
      <div className='flex w-3/6 flex-col items-center gap-10'>
        <h1 className='py-4 font-header text-8xl text-aboutHeader'>Kontakt</h1>
        <div className='flex items-center justify-center gap-8 laptop:gap-16'>
          <div className='flex h-[150px] w-[150px] flex-col items-center justify-center gap-6 border-2 border-solid border-aboutHeader border-opacity-50'>
            <h1 className='font-header text-4xl text-aboutHeader'>Kasia</h1>
            <h3>{formatNumber(process.env.K_NUMBER)}</h3>
          </div>
          <div className='flex h-[150px] w-[150px] flex-col items-center justify-center gap-6 border-2 border-solid border-aboutHeader border-opacity-50'>
            <h1 className='font-header text-4xl text-aboutHeader'>Andrzej</h1>
            <h4>{formatNumber(process.env.A_NUMBER)}</h4>
          </div>
        </div>
        <Image src={flowersPhoto} alt='contact_flowers' height={150} />
      </div>
      <ScreenImage src={photo} alt='contact' />
    </PageLayout>
  );
}

export default Contact;
