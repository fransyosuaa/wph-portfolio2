import React, { useRef, useEffect, useState } from 'react';

import { dotData, skillData } from '@/constants/skill-data';

import Dot from './dot';
import OrbitRing from './orbit-ring';
import SkillImage from './skill-image';

const OrbitSkillContainer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize(containerRef.current.offsetWidth);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className='relative mx-auto aspect-square size-70 md:size-128.75'
    >
      <OrbitRing />

      {/* Skill Icons */}
      {containerSize > 0 &&
        skillData.map((skill, idx) => (
          <SkillImage key={idx} skill={skill} containerSize={containerSize} />
        ))}

      {/* Orbit Dots */}
      {containerSize > 0 &&
        dotData.map((dot, idx) => (
          <Dot key={idx} dot={dot} containerSize={containerSize} />
        ))}
    </div>
  );
};

export default OrbitSkillContainer;
