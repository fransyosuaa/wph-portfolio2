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
  angle: number;
  radius: number; // in percent of container (like 40%)
};

export const skillData: SkillData[] = [
  {
    name: 'HTML',
    percentage: 100,
    src: HTML5,
    alt: 'html',
    angle: 237,
    radius: 94,
  },
  {
    name: 'Redux',
    percentage: 85,
    src: Redux,
    alt: 'redux',
    angle: 330,
    radius: 47,
  },
  {
    name: 'Javascript',
    percentage: 90,
    src: Javascript,
    alt: 'javascript',
    angle: 185,
    radius: 94,
  },
  {
    name: 'React',
    percentage: 90,
    src: React,
    alt: 'react',
    angle: 120,
    radius: 70,
  },
  {
    name: 'CSS',
    percentage: 80,
    src: CSS3,
    alt: 'css',
    angle: 320,
    radius: 94,
  },
  {
    name: 'Typescript',
    percentage: 70,
    src: Typescript,
    alt: 'typescript',
    angle: 45,
    radius: 70,
  },
];

type DotData = {
  angle: number;
  radius: number; // in percent of container (like 40%)
};

export const dotData: DotData[] = [
  {
    angle: 283,
    radius: 100,
  },
  {
    angle: 220,
    radius: 75,
  },
  {
    angle: 350,
    radius: 75,
  },
  {
    angle: 183,
    radius: 52,
  },
  {
    angle: 85,
    radius: 100,
  },
];
