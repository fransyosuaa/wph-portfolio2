import React from 'react';

import Section from '@/components/layouts/section';

import ComparisonCard from './comparison/comparison-card';

const ComparisonContainer = () => {
  return (
    <Section
      id='comparison'
      title='Why I Stand Out'
      description='A showcase of my unique approach and skill set compared to conventional front-end developers'
    >
      <ComparisonCard />
    </Section>
  );
};

export default ComparisonContainer;
