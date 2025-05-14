import Image from 'next/image';
import React from 'react';

import GradientArrowIcon from '@/components/icons/gradient-arrow-icon';
import CustomLink from '@/components/ui/custom-link';

import ProjectInfo from './project-info';

type ProjectCardProps = {
  href: string;
  src: string;
  alt: string;
  name: string;
  description: string;
  skills: string[];
  height?: number;
  width?: number;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { href, src, alt, name, description, skills } = props;
  return (
    <div className='flex flex-1 basis-70 transform flex-col gap-3 transition-transform duration-300 ease-in-out hover:scale-[1.01] md:gap-4'>
      <Image
        loading='lazy'
        src={src}
        alt={alt}
        height={740}
        width={740}
        className='h-full w-full rounded-3xl object-cover md:rounded-4xl'
      />
      <div className='flex flex-col gap-3 md:gap-10'>
        <ProjectInfo name={name} skills={skills} description={description} />
        <CustomLink href={href} openNewTab className='flex gap-1.5'>
          <span className='md:text-lg-bold bg-gradient-purple-pink text-md-bold bg-clip-text text-transparent'>
            Visit
          </span>
          <GradientArrowIcon className='size-6' />
        </CustomLink>
      </div>
    </div>
  );
};

export default ProjectCard;
