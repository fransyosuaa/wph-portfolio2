import Image from 'next/image';
import React from 'react';

import HeaderSection from '@/components/ui/header-section';

import { generateClamp } from '@/utils/clamp';

import MarqueeCard from './testimony/marquee-card';

const TestimonyContainer = () => {
  return (
    <section className='relative overflow-hidden'>
      <Image
        src='/assets/images/container/testimony/ellipse-background.png'
        alt='ellipse background'
        width={518}
        height={517}
        className='absolute -top-30 right-0 z-[-1]'
      />
      <div
        className='custom-container'
        style={{
          paddingTop: generateClamp(40, 80, 1208),
        }}
        id='testimony'
      >
        <HeaderSection
          title='What People Say About Me'
          description='Hear from clients and colleagues about their experiences working with me.'
        />
      </div>

      {/* Marquee not inside of custom-container */}
      <div
        style={{
          marginTop: generateClamp(32, 48, 1208),
          paddingBottom: generateClamp(40, 80, 1208),
        }}
      >
        <MarqueeCard />
      </div>
    </section>
  );
};

export default TestimonyContainer;
