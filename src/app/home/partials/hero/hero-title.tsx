import React from 'react';

const HeroTitle = () => {
  return (
    <h1 className='display-xl-bold md:display-3xl-extrabold max-w-239'>
      I Am{' '}
      <span className='bg-[url("/assets/images/hero/border-title.png")] bg-[length:100%_100%] bg-no-repeat px-4 py-1'>
        <span className='bg-gradient-purple-pink bg-clip-text text-transparent'>
          Not Overreact
        </span>
      </span>{' '}
      But... I&apos;m So Over React
    </h1>
  );
};

export default HeroTitle;
