import React from 'react';

type PercentageBarProps = {
  skill: {
    name: string;
    percentage: number;
  };
  inView: boolean;
};

const PercentageBar = (props: PercentageBarProps) => {
  const { skill, inView } = props;
  const { name, percentage } = skill;
  return (
    <div className='flex flex-col gap-1.5 md:gap-3'>
      <div className='flex-between md:text-md-semibold text-sm-semibold'>
        <span>{name}</span>
        <span>{`${percentage}%`}</span>
      </div>
      <div className='h-3 w-full overflow-hidden rounded-full bg-neutral-400'>
        <div
          className='bg-gradient-purple-pink h-full rounded-full transition-all duration-[1200ms] ease-out'
          style={{
            width: inView ? `${percentage}%` : '0%',
          }}
        ></div>
      </div>
    </div>
  );
};

export default PercentageBar;
