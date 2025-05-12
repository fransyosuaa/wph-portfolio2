import { X } from 'lucide-react';
import React from 'react';

const UncheckedIcon = () => {
  return (
    <div className='m:w-7 flex-center aspect-square w-5 rounded-full bg-neutral-300 p-[0.1rem] md:p-[0.14375rem]'>
      <X className='size-4 text-neutral-100' />
    </div>
  );
};

export default UncheckedIcon;
