import { StaticImageData } from 'next/image';

import DribbleIcon from '../../public/assets/icons/footer/dribble-icon.png';
import InstaIcon from '../../public/assets/icons/footer/instagram-icon.png';
import LinkedInIcon from '../../public/assets/icons/footer/linkedin-icon.png';

type FooterData = {
  src: StaticImageData;
  alt: string;
};

export const footerData: FooterData[] = [
  {
    src: DribbleIcon,
    alt: 'dribble icon',
  },
  {
    src: InstaIcon,
    alt: 'instagram icon',
  },
  {
    src: LinkedInIcon,
    alt: 'linkedin icon',
  },
];
