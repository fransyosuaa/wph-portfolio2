import React from 'react';

import { Button } from '@/components/ui/button';

import { generateClamp } from '@/utils/clamp';

import HeroBackground from './hero/hero-background';
import HeroDescription from './hero/hero-description';
import HeroPill from './hero/hero-pill';
import HeroTitle from './hero/hero-title';

type HeroProps = {
  buttonRef: React.RefObject<HTMLButtonElement | null>;
};

const Hero = ({ buttonRef }: HeroProps) => {
  return (
    <section className='relative overflow-hidden' id='home'>
      <HeroBackground />

      <div
        className='custom-container flex-center flex-col text-center'
        style={{
          gap: generateClamp(20, 24, 1208),
          marginTop: generateClamp(104, 222, 1208),
          marginBottom: 'clamp(0px, max(0px, -73.4px + 20.4vw), 173px)',
        }}
      >
        {/* Frans' Portfolio */}
        <HeroPill />
        {/* Title */}
        <HeroTitle />
        {/* Description */}
        <HeroDescription />
        <Button asChild ref={buttonRef}>
          <a href='#about'>View Portfolio</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
