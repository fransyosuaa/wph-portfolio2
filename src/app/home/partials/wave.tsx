import Image from 'next/image';
import React from 'react';

const Wave = () => {
  return (
    <section className='absolute top-115 left-0 z-[-1] w-full translate-y-[7%] transform max-md:h-28.25 md:top-136'>
      <Image
        src='/assets/images/waves.png'
        alt='waves'
        width={1440}
        height={381}
        className='w-full'
      />
      <div className='absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-neutral-600 to-transparent' />
    </section>
  );
};

export default Wave;
