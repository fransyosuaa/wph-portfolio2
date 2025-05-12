import React from 'react';

import CheckedIcon from '@/components/ui/checked-icon';
import UncheckedIcon from '@/components/ui/unchecked-icon';

const headerText: string[] = ['Skill', 'Me', 'Other'];
const bodyText: string[] = [
  'React Expert',
  'Perfect Pixel',
  'TypeScript Proficiency',
  'Clean, Maintainable Code',
  'Responsive Website',
  'Performance Optimization',
  'UI Design Proficiency (Figma)',
];

const ComparisonCard = () => {
  return (
    <div className='text-sm-semibold rounded-3xl bg-neutral-500 px-2.5 py-6 text-neutral-100 md:px-6'>
      {/* Header */}
      <div className='bg-gradient-purple-pink md:text-md-bold grid h-12 grid-cols-[4fr_1fr_1fr] items-center rounded-full px-2.5 text-center md:h-14 md:grid-cols-3 md:rounded-4xl md:px-0'>
        {headerText.map((txt, index) => (
          <p key={index}>{txt}</p>
        ))}
      </div>
      {/* Body */}
      <div className='md:text-md-semibold divide-y-[1px] divide-neutral-400'>
        {bodyText.map((txt, index) => (
          <div
            className='grid h-18 grid-cols-[4fr_1fr_1fr] items-center bg-neutral-500 text-center md:grid-cols-3'
            key={index}
          >
            <p className='p-2 pl-2.5 md:pl-2'>{txt}</p>
            <div className='flex-center'>
              <CheckedIcon />
            </div>
            <div className='flex-center'>
              <UncheckedIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonCard;
