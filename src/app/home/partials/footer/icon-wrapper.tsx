import Image, { StaticImageData } from 'next/image';
import React from 'react';

type IconWrapperProps = {
  src: StaticImageData;
  alt: string;
};

const IconWrapper = (props: IconWrapperProps) => {
  const { src, alt } = props;
  return (
    <div className='flex-center aspect-square h-10 rounded-full border border-neutral-400 md:h-12'>
      <Image src={src} alt={alt} />
    </div>
  );
};

export default IconWrapper;
