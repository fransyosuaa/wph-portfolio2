import Image from 'next/image';
import React from 'react';

import CustomLink from '@/components/ui/custom-link';

import { footerData } from '@/constants/footer-data';
import { generateClamp } from '@/utils/clamp';

import IconWrapper from './footer/icon-wrapper';

const Footer = () => {
  return (
    <section className='w-full bg-neutral-500'>
      <div className='custom-container flex flex-col-reverse gap-6 py-10 md:flex md:flex-row md:justify-between md:py-7.5'>
        <div className='flex items-center gap-4'>
          <a href='#home'>
            <Image
              src='/assets/images/logo.png'
              alt='logo'
              width={40}
              height={40}
              style={{
                height: generateClamp(36, 40, 1208),
                width: generateClamp(36, 40, 1208),
              }}
            />
          </a>
          <span className='md:text-md-regular text-sm-regular text-neutral-200'>
            &copy; fransyosuaa
          </span>
        </div>
        <div className='flex items-center gap-4'>
          {footerData.map((dt, idx) => (
            <CustomLink key={idx} href={dt.url} openNewTab>
              <IconWrapper src={dt.src} alt={dt.alt} />
            </CustomLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
