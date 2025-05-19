import React from 'react';

import Section from '@/components/layouts/section';

import OrbitSkillContainer from './skill/orbit-skill-container';
import PercentageBarContainer from './skill/percentage-bar-container';

const SkillContainer = () => {
  return (
    <Section
      id='skill'
      title='My Core Skill'
      description='An overview of the key technologies and frameworks I specialize in'
    >
      <div className='flex-between flex-wrap gap-6 md:gap-12'>
        <div className='flex-center flex-[6.4] basis-80'>
          <OrbitSkillContainer />
        </div>
        <div className='flex-[3.6] basis-80'>
          <PercentageBarContainer />
        </div>
      </div>
    </Section>
  );
};

export default SkillContainer;
