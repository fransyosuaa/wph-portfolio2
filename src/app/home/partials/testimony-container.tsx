import Image from 'next/image';
import React from 'react';

import HeaderSection from '@/components/ui/headerSection';

import MarqueeCard from './testimony/marquee-card';

const TestimonyContainer = () => {
  return (
    <section className='relative'>
      {/* don't forget add overflow-hidden in <section> */}
      <Image
        src='/assets/images/container/testimony/ellipseBackground.png'
        alt='ellipse-purple'
        width={518}
        height={517}
        className='absolute -top-30 right-0 z-[-1]'
      />
      <div
        className='custom-container flex flex-col'
        style={{ paddingTop: 'clamp(2.5rem, 6.62vw, 5rem)' }}
      >
        <HeaderSection
          title='What People Say About Me'
          description='Hear from clients and colleagues about their experiences working with me.'
        />
      </div>
      <div
        style={{
          paddingBottom: 'clamp(2.5rem, 6.62vw, 5rem)',
          marginTop: 'clamp(2rem, 3.97vw, 3rem)',
        }}
      >
        <MarqueeCard />
      </div>
    </section>
  );
};

export default TestimonyContainer;
