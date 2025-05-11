import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className='relative overflow-hidden'>
      <Image
        src='/assets/images/hero/backgroundPattern.png'
        alt='background-pattern'
        width={1432}
        height={765}
        className='absolute top-0 right-0 z-[-1] bg-repeat-y'
      />
      <Image
        src='/assets/images/hero/ellipseLeftUpper.png'
        alt='ellipse-purple-left-upper'
        width={0}
        height={0}
        className='absolute top-0 right-1/2 z-[-1] h-[201px] w-[461px] translate-x-[-51%] transform max-md:hidden'
      />
      <Image
        src='/assets/images/hero/ellipseBackgroundRight.png'
        alt='ellipse-purple-right'
        width={0}
        height={0}
        className='absolute top-0 right-0 z-[-1] h-[1624px] w-[1190px]'
      />
      <Image
        src='/assets/images/waves.png'
        alt='waves'
        width={1440}
        height={381}
        className='absolute top-110 left-0 z-[-1] w-full bg-repeat-y md:top-145'
      />
      <Image
        src='/assets/images/hero/ellipseDot.png'
        alt='ellipse-dot'
        width={7.25}
        height={7.25}
        className='absolute top-170 right-85 z-[-1]'
      />
      <Image
        src='/assets/images/hero/ellipseDot.png'
        alt='ellipse-dot'
        width={7.25}
        height={7.25}
        className='absolute top-140 right-35 z-[-1]'
      />
      <Image
        src='/assets/images/hero/ellipseDot.png'
        alt='ellipse-dot'
        width={7.25}
        height={7.25}
        className='absolute top-95 right-30 z-[-1]'
      />
      <Image
        src='/assets/images/hero/ellipseDot.png'
        alt='ellipse-dot'
        width={7.25}
        height={7.25}
        className='absolute top-30 right-120 z-[-1]'
      />
      <Image
        src='/assets/images/hero/ellipseDot.png'
        alt='ellipse-dot'
        width={7.25}
        height={7.25}
        className='absolute top-190 right-348 z-[-1]'
      />
      <Image
        src='/assets/images/hero/ellipseDot.png'
        alt='ellipse-dot'
        width={7.25}
        height={7.25}
        className='absolute top-30 right-350 z-[-1]'
      />
      <Image
        src='/assets/images/hero/ellipseDot.png'
        alt='ellipse-dot'
        width={7.25}
        height={7.25}
        className='absolute top-50 right-75 z-[-1]'
      />
      <Image
        src='/assets/images/hero/ellipseDot.png'
        alt='ellipse-dot'
        width={7.25}
        height={7.25}
        className='absolute top-85 right-320 z-[-1]'
      />
      <Image
        src='/assets/images/hero/ellipseDot.png'
        alt='ellipse-dot'
        width={7.25}
        height={7.25}
        className='absolute top-150 right-295 z-[-1]'
      />
      <div
        className='custom-container flex-center mt-26 flex-col text-center md:mt-55.5'
        style={{
          gap: 'clamp(1.25rem, 1.99vw, 1.5rem)',
        }}
      >
        {/* Frans' Portfolio */}
        <div className='bg-gradient-purple-pink rounded-full p-[1px] shadow-[0_0_17px_rgba(135,70,235,0.55)]'>
          <div
            className='text-xs-medium md:text-md-medium rounded-full bg-neutral-500 py-2 text-neutral-100'
            style={{ paddingInline: 'clamp(1rem, 1.99vw, 1.5rem)' }}
          >
            👨 Frans’ Portfolio
          </div>
        </div>
        {/* Title */}
        <h1 className='display-xl-bold md:display-3xl-extrabold max-w-239 text-neutral-100'>
          I Am{' '}
          <span className='bg-[url("/assets/images/hero/borderTitle.png")] bg-[length:100%_100%] bg-no-repeat px-4 py-1'>
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
        <Button>View Portfolio</Button>
        <div className='bg-gradient-purple-pink flex-center relative mt-10 w-full rounded-4xl md:mt-63.25'>
          <Image
            src='/assets/images/hero/photo.png'
            alt='photo'
            width={818}
            height={459}
          />
          <Image
            src='/assets/icons/hero/playIcon.png'
            alt='play-icon'
            width={70}
            height={70}
            className='absolute top-1/2 left-1/2 translate-x-[-50%] transform cursor-pointer'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
