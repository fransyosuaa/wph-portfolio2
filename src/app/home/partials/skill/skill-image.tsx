import Image, { StaticImageData } from 'next/image';
import React from 'react';

type SkillImageProps = {
  skill: {
    x: string;
    y: string;
    src: StaticImageData;
    name: string;
  };
};

const SkillImage = (props: SkillImageProps) => {
  const { skill } = props;
  const { x, y, src, name } = skill;
  return (
    <div
      className='bg-gradient-purple-pink absolute rounded-sm p-[1px] md:rounded-md'
      style={{
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className='flex-center h-11 w-22 rounded-sm bg-neutral-500 p-1.5 md:h-20 md:w-40.5 md:rounded-md md:p-2.5'>
        <Image
          src={src}
          alt={`skill-${name}`}
          className='h-7 object-contain md:h-13'
        />
      </div>
    </div>
  );
};

export default SkillImage;
