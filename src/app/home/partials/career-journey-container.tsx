import React from 'react';

import HeaderSection from '@/components/ui/headerSection';

import CareerHistory from './careerJourney/career-history';

const CareerJourneyContainer = () => {
  return (
    <section
      className='custom-container flex flex-col'
      style={{ paddingBlock: 'clamp(2.5rem, 6.62vw, 5rem)' }}
    >
      <HeaderSection
        title='Career Journey'
        description='A visual timeline of key milestones and experiences from over the years.'
      />
      <div className='mt-8 md:mt-12'>
        <CareerHistory />
      </div>
    </section>
  );
};

export default CareerJourneyContainer;
