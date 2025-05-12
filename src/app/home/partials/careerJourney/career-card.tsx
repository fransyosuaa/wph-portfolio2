import Image from 'next/image';
import React from 'react';

type CareerCardProps = {
  title: string;
  companyName: string;
  duration: string;
  jobDesc: string[];
};

const CareerCard = (props: CareerCardProps) => {
  const { title, companyName, duration, jobDesc } = props;
  return (
    <div className='flex flex-col gap-3 rounded-4xl bg-neutral-500 p-3 md:gap-5 md:p-6'>
      <h3 className='text-md-bold md:display-xs-bold text-neutral-100'>
        {title}
      </h3>
      <div className='flex flex-col gap-3 md:flex-row md:items-center'>
        <div className='flex-start gap-1.5'>
          <Image
            src='/assets/icons/container/careerJourney/companyIcon.png'
            alt='company-icon'
            width={24}
            height={24}
          />
          <span className='md:text-md-regular text-sm-regular text-neutral-100'>
            {companyName}
          </span>
        </div>
        <div className='hidden h-1 w-1 rounded-full bg-neutral-100 md:block' />
        <div className='flex-start gap-1.5'>
          <Image
            src='/assets/icons/container/careerJourney/dateIcon.png'
            alt='date-icon'
            width={24}
            height={24}
          />
          <span className='md:text-md-regular text-sm-regular text-neutral-100'>
            {duration}
          </span>
        </div>
      </div>
      <ul className='text-sm-regular md:text-md-regular flex flex-col gap-3 text-neutral-200 md:gap-5'>
        {jobDesc.map((jD, index) => (
          <li key={index} className='flex items-center gap-2'>
            <div className='h-1 w-1 rounded-full bg-neutral-200'>&nbsp;</div>
            <p>{jD}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerCard;
