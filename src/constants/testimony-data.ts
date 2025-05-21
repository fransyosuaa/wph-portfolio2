import { StaticImageData } from 'next/image';

import DediW from '../../public/assets/images/container/testimony/dedi-wibisono.png';
import FeibyV from '../../public/assets/images/container/testimony/feiby-veronika.png';
import HafizP from '../../public/assets/images/container/testimony/hafiz-putra.png';
import HelenaN from '../../public/assets/images/container/testimony/helena-natanael.png';

type TestimonyProps = {
  src: StaticImageData;
  alt: string;
  name: string;
  position: string;
  testimony: string;
};

export const testimonyData: TestimonyProps[] = [
  {
    src: DediW,
    alt: 'dedi wibisono',
    name: 'Dedi Wibisono',
    position: 'FE @detik.com',
    testimony:
      '“Frans is a good friend to work with even though he is a different team. Nice to have a discussion with him. Likes to learn new things and be ready to face challanges. Success in your next career ya”',
  },
  {
    src: HelenaN,
    alt: 'helena natanael',
    name: 'Helena Natanael',
    position: 'SE @tiket.com',
    testimony:
      '“Frans is a friendly person and eager to learn. We worked together in a Front-End project when his actual scope is Back-End. However he can learn fast and implement his knowledge in the project so it meets the expectation.”',
  },
  {
    src: HafizP,
    alt: 'hafiz putra',
    name: 'Hafiz Putra',
    position: 'SE @kitabisa',
    testimony:
      '“He is a good person and enjoyable to talk with. He likes to help people solving business problems with his engineering knowledge. He likes to venture out of his field to find joy in technical engineering.”',
  },
  {
    src: FeibyV,
    alt: 'feiby veronika',
    name: 'Feiby Veronika',
    position: 'SE @FinAccel',
    testimony:
      '“Frans is a diligent and responsible employee. He has good teamwork and great leadership. He always arrived on time. He carried out his tasks on schedule. I was very happy to work with Frans.”',
  },
];
