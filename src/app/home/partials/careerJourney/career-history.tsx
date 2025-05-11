'use client';

import React, { useEffect, useRef, useState } from 'react';

import { careerJourneyData } from '@/constants/career-data';

import CareerCard from './career-card';

const CareerHistory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const updateLineHeight = () => {
      if (containerRef.current && lastDotRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const lastDotTop = lastDotRef.current.getBoundingClientRect().top;
        setLineHeight(
          lastDotTop - containerTop + lastDotRef.current.offsetHeight / 2
        ); // stop at center of last dot
      }
    };

    updateLineHeight();

    const resizeObserver = new ResizeObserver(updateLineHeight);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className='relative'>
      <div
        className='from-gradient-from to-gradient-to absolute top-0 left-2 z-[-1] w-1 rounded-full bg-gradient-to-b md:left-2.5 md:w-1.5'
        style={{ height: `${lineHeight}px` }}
      />
      <div ref={containerRef} className='flex flex-col gap-4 md:gap-6'>
        {careerJourneyData.map((data, index) => {
          const isLast = index === careerJourneyData.length - 1;
          return (
            <div
              key={index}
              className='group grid grid-cols-[1.25rem_auto] gap-x-2 md:grid-cols-[1.5rem_auto] md:gap-x-6'
            >
              <div className='flex flex-col items-center'>
                <div
                  ref={isLast ? lastDotRef : null}
                  className='bg-primary-100 aspect-square h-5 rounded-full p-1.25 transition-all duration-300 ease-in-out group-hover:shadow-[0_0_12px_4px_rgba(192,132,252,0.5)] md:h-6 md:p-1.5'
                >
                  <div className='bg-gradient-purple-pink aspect-square h-2.5 rounded-full md:h-3'></div>
                </div>
              </div>
              <div className='transform transition-transform duration-300 ease-in-out group-hover:scale-[1.02]'>
                <CareerCard
                  title={data.title}
                  companyName={data.companyName}
                  duration={data.duration}
                  jobDesc={data.jobDesc}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerHistory;
