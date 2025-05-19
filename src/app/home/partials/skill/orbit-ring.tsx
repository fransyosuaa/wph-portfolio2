import React from 'react';

const OrbitRing = () => {
  return (
    <>
      {/* ring 3 - outer line */}
      <div className='absolute inset-0 z-[-1] m-auto aspect-square size-70 rounded-full border border-neutral-400 md:size-128.75' />
      {/* ring 2 - middle line */}
      <div className='absolute inset-0 z-[-1] m-auto aspect-square size-52.5 rounded-full border border-neutral-400 md:size-96.25' />
      {/* ring 1 - inner line */}
      <div className='absolute inset-0 z-[-1] m-auto aspect-square size-36.25 rounded-full border border-neutral-400 md:size-66.5' />
    </>
  );
};

export default OrbitRing;
