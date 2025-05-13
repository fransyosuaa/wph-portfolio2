import React from 'react';

import HeaderSection from '@/components/ui/header-section';

import CareerHistory from './career-journey/career-history';

const CareerJourneyContainer = () => {
  return (
    <section
      className='custom-container flex flex-col'
      style={{
        paddingBlock: 'clamp(2.5rem, 6.62vw, 5rem)',
        gap: 'clamp(2rem, 3.97vw, 3rem)',
      }}
      id='career'
    >
      <HeaderSection
        title='Career Journey'
        description='A visual timeline of key milestones and experiences from over the years.'
      />
      <CareerHistory />
    </section>
  );
};

export default CareerJourneyContainer;
