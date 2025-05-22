import React from 'react';

import { cn } from '@/lib/utils';
import { generateClamp } from '@/utils/clamp';

import HeaderSection from '../ui/header-section';

type SectionProps = {
  className?: string;
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

const Section = (props: SectionProps) => {
  const { className = '', id, title, description, children } = props;

  return (
    <section
      className={cn('custom-container flex flex-col', className)}
      style={{
        paddingBlock: generateClamp(40, 80, 1208),
        gap: generateClamp(32, 48, 1208),
      }}
      id={id}
    >
      <HeaderSection title={title} description={description} />
      {children}
    </section>
  );
};

export default Section;
