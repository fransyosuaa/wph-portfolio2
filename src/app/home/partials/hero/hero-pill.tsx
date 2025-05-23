import React from 'react';

import { generateClamp } from '@/utils/clamp';

const HeroPill = () => {
  return (
    <div className='bg-gradient-purple-pink rounded-full p-[1px] shadow-[0_0_17px_rgba(135,70,235,0.55)]'>
      <div
        className='text-xs-medium md:text-md-medium rounded-full bg-neutral-500 py-2'
        style={{ paddingInline: generateClamp(16, 24, 1208) }}
      >
        👨 Frans’ Portfolio
      </div>
    </div>
  );
};

export default HeroPill;
