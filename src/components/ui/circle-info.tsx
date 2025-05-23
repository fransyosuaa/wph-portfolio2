import React from 'react';

type CircleInfoProps = {
  title: string;
  description: string;
  type: string;
};

const CircleInfo = ({ title, description, type }: CircleInfoProps) => {
  if (type === 'outline') {
    return (
      <div className='bg-gradient-purple-pink aspect-square h-37 rounded-full p-[1px] md:h-68.25'>
        <div className='flex aspect-square w-full flex-col items-center justify-center gap-1.5 rounded-full bg-neutral-500 md:gap-2'>
          <p className='display-sm-extrabold md:display-2xl-extrabold'>
            {title}
          </p>
          <p className='text-sm-regular md:text-md-regular'>{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className='bg-gradient-purple-pink flex aspect-square h-37 flex-col items-center justify-center gap-1.5 rounded-full p-[1px] md:h-68.25 md:gap-2'>
      <p className='display-sm-extrabold md:display-2xl-extrabold'>{title}</p>
      <p className='text-sm-regular md:text-md-regular'>{description}</p>
    </div>
  );
};

export default CircleInfo;
