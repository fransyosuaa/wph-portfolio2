import React from 'react';

import { dotData, skillData } from '@/constants/skill-data';

import Dot from './dot';
import OrbitRing from './orbit-ring';
import SkillImage from './skill-image';

const OrbitSkillContainer = () => {
  return (
    <div className='relative mx-auto aspect-square size-70 md:size-128.75'>
      <OrbitRing />

      {/* Skill Icons */}
      {skillData.map((skill, idx) => (
        <SkillImage key={idx} skill={skill} />
      ))}

      {/* Orbit Dots */}
      {dotData.map((dot, idx) => (
        <Dot key={idx} dot={dot} />
      ))}
    </div>
  );
};

export default OrbitSkillContainer;
