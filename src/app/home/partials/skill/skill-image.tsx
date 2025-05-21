import Image, { StaticImageData } from 'next/image';
import React from 'react';

type SkillImageProps = {
  skill: {
    angle: number;
    radius: number; // in percent of container (like 40%)
    src: StaticImageData;
    name: string;
  };
  containerSize: number; // in px
};

const SkillImage = ({ skill, containerSize }: SkillImageProps) => {
  const { src, name, angle, radius } = skill;

  const angleRad = (angle * Math.PI) / 180;

  const effectiveRadius = (radius / 100) * (containerSize / 2);
  const x = effectiveRadius * Math.cos(angleRad);
  const y = effectiveRadius * Math.sin(angleRad);

  return (
    <div
      className='absolute top-1/2 left-1/2'
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <div
        className='animate-orbit'
        style={{
          transformOrigin: 'center center', // 🔑 critical
        }}
      >
        <div
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
        >
          <div className='animate-counter-orbit bg-gradient-purple-pink rounded-sm p-[1px] md:rounded-md'>
            <div className='flex-center h-11 w-22 rounded-sm bg-neutral-500 p-1.5 md:h-20 md:w-40.5 md:rounded-md md:p-2.5'>
              <Image
                src={src}
                alt={`skill-${name}`}
                className='h-7 object-contain md:h-13'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillImage;
