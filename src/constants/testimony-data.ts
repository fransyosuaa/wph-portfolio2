import { StaticImageData } from 'next/image';

import rafael1 from '../../public/assets/images/container/testimony/rafel-struick.png';
import rafael2 from '../../public/assets/images/container/testimony/rafel-struick2.png';
import rafael3 from '../../public/assets/images/container/testimony/rafel-struick3.png';
import rafael4 from '../../public/assets/images/container/testimony/rafel-struick4.png';

type TestimonyProps = {
  src: StaticImageData;
  alt: string;
  name: string;
  position: string;
  testimony: string;
};

export const testimonyData: TestimonyProps[] = [
  {
    src: rafael1,
    alt: 'rafael1',
    name: 'Rafael',
    position: 'CEO',
    testimony:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    src: rafael2,
    alt: 'rafael2',
    name: 'Rafael',
    position: 'CEO',
    testimony:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    src: rafael3,
    alt: 'rafael3',
    name: 'Rafael',
    position: 'CEO',
    testimony:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    src: rafael4,
    alt: 'rafael4',
    name: 'Rafael',
    position: 'CEO',
    testimony:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
];
