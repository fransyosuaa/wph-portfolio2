import { StaticImageData } from 'next/image';

import DribbleIcon from '../../public/assets/icons/footer/dribble-icon.png';
import InstaIcon from '../../public/assets/icons/footer/instagram-icon.png';
import LinkedInIcon from '../../public/assets/icons/footer/linkedin-icon.png';

type FooterData = {
  src: StaticImageData;
  alt: string;
  url: string;
};

export const footerData: FooterData[] = [
  {
    src: DribbleIcon,
    alt: 'dribble icon',
    url: '#',
  },
  {
    src: InstaIcon,
    alt: 'instagram icon',
    url: '#',
  },
  {
    src: LinkedInIcon,
    alt: 'linkedin icon',
    url: 'https://www.linkedin.com/in/unclefrans/',
  },
];
