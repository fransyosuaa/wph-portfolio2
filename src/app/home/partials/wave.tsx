import React from 'react';

import { generateClamp, generateClampInverse } from '@/utils/clamp';

type WaveProps = {
  heroBtnTop: number;
};

const Wave = ({ heroBtnTop }: WaveProps) => {
  return (
    <section
      className='absolute left-0 z-[-1] w-full'
      style={{
        top: `calc(${heroBtnTop}px + ${generateClampInverse(0, 32, 1208)})`,
      }}
    >
      <div
        className='before-bg-wave relative w-full'
        style={{
          height: generateClamp(100, 381, 1208),
        }}
      />
    </section>
  );
};

export default Wave;
