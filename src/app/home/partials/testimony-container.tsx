import Image from 'next/image';
import React from 'react';

import Section from '@/components/layouts/section';

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
      <Section
        id='testimony'
        title='What People Say About Me'
        description='Hear from clients and colleagues about their experiences working with me.'
      >
        <MarqueeCard />
      </Section>
    </section>
  );
};

export default TestimonyContainer;
