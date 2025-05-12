import React from 'react';

import HeaderSection from '@/components/ui/header-section';

import ComparisonCard from './comparison/comparison-card';

const ComparisonContainer = () => {
  return (
    <section
      className='custom-container flex flex-col'
      style={{ paddingBlock: 'clamp(2.5rem, 6.62vw, 5rem)' }}
    >
      <HeaderSection
        title='Why I Stand Out'
        description='A showcase of my unique approach and skill set compared to conventional front-end developers'
      />
      <div className='mt-8 md:mt-12'>
        <ComparisonCard />
      </div>
    </section>
  );
};

export default ComparisonContainer;
