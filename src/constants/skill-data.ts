import { StaticImageData } from 'next/image';

import CSS3 from '../../public/assets/images/container/skill/css3.png';
import HTML5 from '../../public/assets/images/container/skill/html5.png';
import Javascript from '../../public/assets/images/container/skill/js.png';
import React from '../../public/assets/images/container/skill/react.png';
import Redux from '../../public/assets/images/container/skill/redux.png';
import Typescript from '../../public/assets/images/container/skill/ts.png';

type SkillData = {
  name: string;
  percentage: number;
  src: StaticImageData;
  alt: string;
  x: string;
  y: string;
  // orbit: 'orbit-slow' | 'orbit-medium' | 'orbit-fast';
  // radius: string;
};

export const skillData: SkillData[] = [
  {
    name: 'HTML',
    percentage: 100,
    src: HTML5,
    alt: 'html',
    x: '25%',
    y: '8%',
  },
  {
    name: 'Redux',
    percentage: 85,
    src: Redux,
    alt: 'redux',
    x: '65%',
    y: '40%',
  },
  {
    name: 'Javascript',
    percentage: 90,
    src: Javascript,
    alt: 'javascript',
    x: '5%',
    y: '45%',
  },
  {
    name: 'React',
    percentage: 90,
    src: React,
    alt: 'react',
    x: '23%',
    y: '81%',
  },
  {
    name: 'CSS',
    percentage: 80,
    src: CSS3,
    alt: 'css',
    x: '90%',
    y: '20%',
  },
  {
    name: 'Typescript',
    percentage: 70,
    src: Typescript,
    alt: 'typescript',
    x: '70%',
    y: '75%',
  },
];

type DotData = {
  x: string;
  y: string;
};

export const dotData: DotData[] = [
  {
    x: '65%',
    y: '2.5%',
  },
  {
    x: '22%',
    y: '25%',
  },
  {
    x: '86.5%',
    y: '43%',
  },
  {
    x: '24%',
    y: '50%',
  },
  {
    x: '51%',
    y: '100%',
  },
];
