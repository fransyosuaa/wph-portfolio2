import React from 'react';

import Section from '@/components/layouts/section';

import CareerHistory from './career-journey/career-history';

const CareerJourneyContainer = () => {
  return (
    <Section
      id='career'
      title='Career Journey'
      description='A visual timeline of key milestones and experiences from over the years.'
    >
      <CareerHistory />
    </Section>
  );
};

export default CareerJourneyContainer;
