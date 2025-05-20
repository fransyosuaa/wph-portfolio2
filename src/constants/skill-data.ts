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
  radius: number;
};

export const skillData: SkillData[] = [
  {
    name: 'HTML',
    percentage: 100,
    src: HTML5,
    alt: 'html',
    angle: 237,
    radius: 245,
  },
  {
    name: 'Redux',
    percentage: 85,
    src: Redux,
    alt: 'redux',
    angle: 330,
    radius: 80,
  },
  {
    name: 'Javascript',
    percentage: 90,
    src: Javascript,
    alt: 'javascript',
    angle: 185,
    radius: 245,
  },
  {
    name: 'React',
    percentage: 90,
    src: React,
    alt: 'react',
    angle: 120,
    radius: 208,
  },
  {
    name: 'CSS',
    percentage: 80,
    src: CSS3,
    alt: 'css',
    angle: 320,
    radius: 248,
  },
  {
    name: 'Typescript',
    percentage: 70,
    src: Typescript,
    alt: 'typescript',
    angle: 45,
    radius: 170,
  },
];

type DotData = {
  angle: number;
  radius: number;
};

export const dotData: DotData[] = [
  {
    angle: 283,
    radius: 262,
  },
  {
    angle: 220,
    radius: 201,
  },
  {
    angle: 350,
    radius: 186,
  },
  {
    angle: 183,
    radius: 140,
  },
  {
    angle: 85,
    radius: 250,
  },
];
