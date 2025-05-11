import { StaticImageData } from 'next/image';

import DribbleIcon from '../../public/assets/icons/footer/dribbleIcon.png';
import InstaIcon from '../../public/assets/icons/footer/instagramIcon.png';
import LinkedInIcon from '../../public/assets/icons/footer/linkedInIcon.png';

type FooterData = {
  src: StaticImageData;
  alt: string;
};

export const footerData: FooterData[] = [
  {
    src: DribbleIcon,
    alt: 'dribble-icon',
  },
  {
    src: InstaIcon,
    alt: 'instagram-icon',
  },
  {
    src: LinkedInIcon,
    alt: 'linkedin-icon',
  },
];
