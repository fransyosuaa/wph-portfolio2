import React from 'react';

import { cn } from '@/lib/utils';

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
        paddingBlock: 'clamp(2.5rem, 6.62vw, 5rem)',
        gap: 'clamp(2rem, 3.97vw, 3rem)',
      }}
      id={id}
    >
      <HeaderSection title={title} description={description} />
      {children}
    </section>
  );
};

export default Section;
