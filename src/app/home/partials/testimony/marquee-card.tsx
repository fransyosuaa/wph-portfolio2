import React from 'react';

import Marquee from '@/components/ui/marquee';

import { testimonyData } from '@/constants/testimony-data';

import TestimonyCard from './testimony-card';

const MarqueeCard = () => {
  return (
    <div className='relative w-full'>
      <Marquee pauseOnHover>
        {testimonyData.map((dt) => (
          <TestimonyCard
            key={dt.alt}
            src={dt.src}
            alt={dt.alt}
            name={dt.name}
            position={dt.position}
            testimony={dt.testimony}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='mt-3 md:mt-5'>
        {testimonyData.map((dt) => (
          <TestimonyCard
            key={dt.alt}
            src={dt.src}
            alt={dt.alt}
            name={dt.name}
            position={dt.position}
            testimony={dt.testimony}
          />
        ))}
      </Marquee>
      <div className='absolute inset-y-0 left-0 w-[12.5%] bg-gradient-to-r from-neutral-600 to-transparent' />
      <div className='absolute inset-y-0 right-0 w-[12.5%] bg-gradient-to-l from-neutral-600 to-transparent' />
    </div>
  );
};

export default MarqueeCard;
