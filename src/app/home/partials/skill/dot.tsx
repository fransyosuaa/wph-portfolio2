import React from 'react';

type DotProps = {
  dot: {
    angle: number;
    radius: number; // in percent of container (like 40%)
  };
  containerSize: number; // in px
};
const Dot = (props: DotProps) => {
  const {
    dot: { angle, radius },
    containerSize,
  } = props;

  const angleRad = (angle * Math.PI) / 180;
  const effectiveRadius = (radius / 100) * (containerSize / 2);
  const x = effectiveRadius * Math.cos(angleRad);
  const y = effectiveRadius * Math.sin(angleRad);

  return (
    <div
      className='absolute top-1/2 left-1/2 z-[-1]'
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <div
        className='animate-orbit'
        style={{
          transformOrigin: 'center center', // 🔑 critical
        }}
      >
        <div
          className='size-2 rounded-full bg-neutral-400 md:size-4'
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Dot;
