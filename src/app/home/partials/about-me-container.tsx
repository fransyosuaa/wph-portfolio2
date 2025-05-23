import Image from 'next/image';
import React from 'react';

import CircleInfo from '@/components/ui/circle-info';

import { aboutMeData } from '@/constants/about-me-data';
import { generateClamp } from '@/utils/clamp';

const AboutMeContainter = () => {
  return (
    <section
      className='custom-container flex flex-col'
      style={{
        paddingBlock: generateClamp(40, 80, 1208),
        gap: generateClamp(40, 80, 1208),
      }}
      id='about'
    >
      <div className='bg-gradient-purple-pink flex-center relative w-full rounded-4xl'>
        <Image
          src='/assets/images/container/about-me/frans.png'
          alt='photo'
          width={818}
          height={459}
        />
      </div>
      <div className='flex flex-wrap items-start gap-3 md:gap-0'>
        <h2 className='display-sm-extrabold md:display-2xl-extrabold flex-[2.7] basis-80'>
          Who am I?
        </h2>
        <p className='text-sm-regular md:text-md-regular flex-[7.3] basis-80 text-neutral-200'>
          Dynamic Senior Software Engineer with over{' '}
          <span className='md:text-md-bold text-sm-bold text-neutral-100'>
            14 years of experience
          </span>{' '}
          delivering innovative software solutions that enhance user engagement
          and operational efficiency. Proficient in a range of technologies,
          including ReactJS, NodeJs, and Golang, with a strong commitment to
          developing high-quality applications. Passionate about creating
          impactful projects that bring satisfaction to users and stakeholders
          alike. Eager to leverage extensive expertise to further enhance
          ReactJS skills and contribute to team success in a progressive
          environment.
        </p>
      </div>
      <ul className='flex-between flex-wrap gap-3 md:gap-5'>
        {aboutMeData.map((item, index) => {
          const type = (index + 1) % 2 === 0 ? 'default' : 'outline';
          return (
            <li
              key={index}
              className='transform transition-transform duration-300 ease-in-out hover:scale-[1.07]'
            >
              <CircleInfo
                title={item.title}
                description={item.description}
                type={type}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AboutMeContainter;
