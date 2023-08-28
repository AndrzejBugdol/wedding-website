import React from 'react';

function Main() {
  return (
    <div className='flex h-screen flex-col items-center justify-center md:flex-row'>
      <div className='flex w-3/6 items-center justify-center'>Foto</div>
      <div className='flex w-3/6 flex-col items-center justify-center gap-6'>
        <h1 className='font-header text-8xl text-mainHeader'>
          Kasia E Andrzej
        </h1>
        <h3 className='text-3xl font-medium italic'>
          31 maja 2024, godzina 14:00
        </h3>
      </div>
    </div>
  );
}

export default Main;
