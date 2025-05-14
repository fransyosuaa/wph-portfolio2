import React from 'react';

import { projectListData } from '@/constants/project-list-data';

import ProjectCard from './project-list/project-card';

const ProjectListContainer = () => {
  return (
    <section
      className='custom-container flex flex-col'
      style={{
        paddingBlock: 'clamp(2.5rem, 6.62vw, 5rem)',
        gap: 'clamp(2rem, 3.97vw, 3rem)',
      }}
      id='project-list'
    >
      <div className='flex flex-wrap gap-3 md:gap-6.75'>
        <h2 className='display-sm-extrabold md:display-2xl-extrabold flex-[4.6] basis-80 text-left'>
          Experience in Front-End Development
        </h2>
        <p className='text-sm-regular md:text-md-regular flex-[5.4] basis-80 text-left text-neutral-200 md:text-right'>
          I have experience developing 30+ web projects across various
          industries, including marketplaces, health, fashion, sports, and more.
          Implemented 1000+ responsive web pages with interactive features and
          smooth animations
        </p>
      </div>
      <ul className='flex flex-wrap gap-x-6 gap-y-8 md:gap-y-12'>
        {projectListData.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              href={item.url}
              src={item.src}
              alt={item.alt}
              name={item.name}
              description={item.description}
              skills={item.skills}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectListContainer;
