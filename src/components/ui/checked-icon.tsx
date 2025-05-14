import { Check } from 'lucide-react';
import React from 'react';

const CheckedIcon = () => {
  return (
    <div className='m:w-7 bg-gradient-purple-pink flex-center aspect-square w-5 rounded-full p-[0.1rem] md:p-[0.14375rem]'>
      <Check className='size-4' />
    </div>
  );
};

export default CheckedIcon;
