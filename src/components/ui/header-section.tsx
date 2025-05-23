import React from 'react';

type HeaderSectionProps = {
  title: string;
  description: string;
};

const HeaderSection = ({ title, description }: HeaderSectionProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <h2 className='display-sm-extrabold md:display-2xl-extrabold'>{title}</h2>
      <p className='text-sm-regular md:text-md-regular text-neutral-200'>
        {description}
      </p>
    </div>
  );
};

export default HeaderSection;
