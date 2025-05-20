import Image, { StaticImageData } from 'next/image';
import React from 'react';

type SkillImageProps = {
  skill: {
    angle: number;
    radius: number;
    src: StaticImageData;
    name: string;
  };
};

const SkillImage = ({ skill }: SkillImageProps) => {
  const { src, name, angle, radius } = skill;
  const angleRad = (angle * Math.PI) / 180;
  const x = radius * Math.cos(angleRad);
  const y = radius * Math.sin(angleRad);

  return (
    <div
      className='absolute top-1/2 left-1/2'
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <div
        className='bg-gradient-purple-pink rounded-sm p-[1px] md:rounded-md'
        style={{
          transform: `translate(${x}px, ${y}px)`,
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
    </div>
  );
};

export default SkillImage;
