import Image, { StaticImageData } from 'next/image';
import React from 'react';

type TestimonyCardProps = {
  src: StaticImageData;
  alt: string;
  name: string;
  position: string;
  testimony: string;
};

const TestimonyCard = (props: TestimonyCardProps) => {
  const { src, alt, name, position, testimony } = props;

  return (
    <div className='hover:bg-gradient-purple-pink max-w-75.5 rounded-2xl bg-none p-[1px] md:max-w-125'>
      <div className='flex flex-col gap-3 rounded-2xl bg-neutral-500 p-4 md:gap-5 md:p-5'>
        <div className='flex gap-2 md:gap-4'>
          <Image src={src} alt={alt} />
          <div className='flex flex-col gap-0.75'>
            <h4 className='text-sm-bold md:text-md-bold text-neutral-100'>
              {name}
            </h4>
            <p className='text-sm-regular md:text-md-regular text-neutral-200'>
              {position}
            </p>
          </div>
        </div>
        <p className='text-md-regular text-neutral-200'>{testimony}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
