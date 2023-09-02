import React from 'react';
import Location from '@/components/Location';

function Wedding() {
  return (
    <div
      id='wedding'
      className='flex h-screen flex-col items-center  justify-evenly '
    >
      <div className='flex flex-col items-center  justify-between'>
        <h1 className='font-header text-8xl text-weddingHeader'>
          Ślub E Wesele
        </h1>
        <h3 className='text-3xl font-medium italic'>
          31.05.2024 godzina 14:00
        </h3>
      </div>
      <div className='flex w-3/6  items-center justify-center '>
        {/* <Location /> */}
        <h4 className='text-base '>
          Po ślubie zapraszamy serdecznie na przyjęcie weselne!
        </h4>
        {/* <Location /> */}
      </div>
    </div>
  );
}

export default Wedding;
