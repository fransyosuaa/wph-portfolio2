import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

import { generateClamp } from '@/utils/clamp';

const Hero = () => {
  return (
    <section
      className='relative overflow-hidden max-md:pb-10 md:h-224.5'
      id='home'
    >
      <Image
        src='/assets/images/hero/left-upper-purple-ellipse.png'
        alt='left upper purple ellipse'
        width={0}
        height={0}
        className='absolute top-0 right-1/2 z-[-1] h-[201px] w-[461px] translate-x-[-51%] transform max-md:hidden'
      />
      <Image
        src='/assets/images/hero/right-purple-ellipse.png'
        alt='right purple ellipse'
        width={0}
        height={0}
        className='absolute top-0 right-0 z-[-1] h-[1624px] w-[1190px]'
      />
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[url('/assets/images/hero/hero-circle-decoration.png')] bg-repeat opacity-70" />
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[linear-gradient(to_top_left,_transparent,_#262626),url('/assets/images/hero/hero-grid-decoration.png')] bg-repeat opacity-35" />
      <div
        className='custom-container flex-center mt-26 flex-col text-center md:mt-55.5'
        style={{
          gap: generateClamp(20, 24, 1208),
        }}
      >
        {/* Frans' Portfolio */}
        <div className='bg-gradient-purple-pink rounded-full p-[1px] shadow-[0_0_17px_rgba(135,70,235,0.55)]'>
          <div
            className='text-xs-medium md:text-md-medium rounded-full bg-neutral-500 py-2'
            style={{ paddingInline: generateClamp(16, 24, 1208) }}
          >
            👨 Frans’ Portfolio
          </div>
        </div>
        {/* Title */}
        <h1 className='display-xl-bold md:display-3xl-extrabold max-w-239'>
          I Am{' '}
          <span className='bg-[url("/assets/images/hero/border-title.png")] bg-[length:100%_100%] bg-no-repeat px-4 py-1'>
            <span className='bg-gradient-purple-pink bg-clip-text text-transparent'>
              Not Overreact
            </span>
          </span>{' '}
          But... I&apos;m So Over React
        </h1>
        {/* Description */}
        <p className='text-sm-regular md:text-md-regular max-w-239 text-neutral-200'>
          Hi, I&apos;m Frans, a passionate software engineer with over{' '}
          <span className='text-sm-bold md:text-md-semibold text-neutral-100'>
            14 years of experience
          </span>{' '}
          delivering innovative software solutions that enhance user engagement
          and operational efficiency. Passionate about creating impactful
          projects that bring satisfaction to users and stakeholders alike.
        </p>
        <Button asChild>
          <a href='#about'>View Portfolio</a>
        </Button>
      </div>
      <div className='absolute inset-x-0 bottom-0 z-[-1] h-[10%] bg-gradient-to-t from-neutral-600 to-transparent' />
    </section>
  );
};

export default Hero;
