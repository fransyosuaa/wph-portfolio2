import React from 'react';

type DotProps = {
  dot: {
    x: string;
    y: string;
  };
};
const Dot = (props: DotProps) => {
  const {
    dot: { x, y },
  } = props;

  return (
    <div
      className='absolute size-2 rounded-full bg-neutral-400 md:size-4'
      style={{
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default Dot;
