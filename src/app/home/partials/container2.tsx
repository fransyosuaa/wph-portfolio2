import React from 'react';

import HeaderSection from '@/components/ui/headerSection';

const Container2 = () => {
  return (
    <section
      className='custom-container flex flex-col'
      style={{ paddingBlock: 'clamp(2.5rem, 6.62vw, 5rem)' }}
    >
      <HeaderSection
        title='Career Journey'
        description='A visual timeline of key milestones and experiences from over the years.'
      />
      <div></div>
    </section>
  );
};

export default Container2;
