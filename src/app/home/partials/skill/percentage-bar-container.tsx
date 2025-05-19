import React, { useEffect, useRef, useState } from 'react';

import { skillData } from '@/constants/skill-data';

import PercentageBar from './percentage-bar';

const PercentageBarContainer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={containerRef} className='flex flex-col gap-6 md:gap-5'>
      {skillData.map((skill, idx) => (
        <PercentageBar key={idx} skill={skill} inView={inView} />
      ))}
    </div>
  );
};

export default PercentageBarContainer;
