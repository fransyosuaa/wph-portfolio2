import Image from 'next/image';
import React from 'react';

import { footerData } from '@/constants/footer-data';

import IconWrapper from './footer/icon-wrapper';

const Footer = () => {
  return (
    <section className='w-full bg-neutral-500'>
      <div className='custom-container flex flex-col-reverse gap-6 py-10 md:flex md:flex-row md:justify-between md:py-7.5'>
        <div className='flex items-center gap-4'>
          <Image
            src='/assets/images/logo.png'
            alt='logo'
            width={40}
            height={40}
            style={{
              height: 'clamp(2.25rem, 3.31vw, 2.5rem)',
              width: 'clamp(2.25rem, 3.31vw, 2.5rem)',
            }}
          />
          <span className='md:text-md-regular text-sm-regular text-neutral-200'>
            &copy; fransyosuaa
          </span>
        </div>
        <div className='flex items-center gap-4'>
          {footerData.map((dt, idx) => (
            <IconWrapper key={idx} src={dt.src} alt={dt.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
