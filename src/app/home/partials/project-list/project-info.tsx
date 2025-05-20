import React from 'react';

import Pill from '@/components/ui/pill';

type ProjectInfoProps = {
  name: string;
  skills: string[];
  description: string;
};

const ProjectInfo = (props: ProjectInfoProps) => {
  return (
    <div className='flex flex-col gap-2 md:gap-3'>
      <h3 className='text-lg-bold md:text-xl-bold hover:bg-gradient-purple-pink bg-neutral-100 bg-clip-text text-transparent'>
        {props.name}
      </h3>
      <div className='flex gap-2'>
        {props.skills.map((item, idx) => (
          <Pill key={idx}>{item}</Pill>
        ))}
      </div>
      <p className='md:text-md-regular text-sm-regular line-clamp-2 overflow-hidden text-ellipsis text-neutral-200'>
        {props.description}
      </p>
    </div>
  );
};

export default ProjectInfo;
