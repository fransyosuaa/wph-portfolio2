import React from 'react';

type DotProps = {
  dot: {
    angle: number;
    radius: number;
  };
};
const Dot = (props: DotProps) => {
  const {
    dot: { angle, radius },
  } = props;

  const angleRad = (angle * Math.PI) / 180;
  const x = radius * Math.cos(angleRad);
  const y = radius * Math.sin(angleRad);

  return (
    <div
      className='absolute top-1/2 left-1/2 size-2 rounded-full bg-neutral-400 md:size-4'
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  );
};

export default Dot;
