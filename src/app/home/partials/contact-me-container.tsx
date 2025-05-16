import Image from 'next/image';
import React from 'react';

import ContactForm from './contact-me/contact-form';

const ContactMeContainer = () => {
  return (
    <section className='relative'>
      <Image
        src='/assets/images/container/contact-me/ellipse.svg'
        alt='ellipse background'
        width={0}
        height={0}
        className='absolute right-0 -bottom-[0%] z-[-1] h-auto w-[1738px] -translate-x-[0] translate-y-[0%] transform border-2 border-amber-200'
      />
      {/* <div className="pointer-events-none absolute inset-0 z-[-1] bg-[url('/assets/images/hero/hero-circle-decoration.png')] bg-repeat opacity-30" />
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[linear-gradient(to_top_left,_transparent,_#262626),url('/assets/images/hero/hero-grid-decoration.png')] bg-repeat opacity-30" /> */}
      <div
        className='custom-container flex-between flex-wrap gap-6 py-10 md:pt-20 md:pb-25'
        id='contact-me'
      >
        <div className='flex flex-[6.8] basis-80 flex-col gap-3'>
          <h2 className='display-sm-extrabold md:display-2xl-extrabold'>
            Contact Me
          </h2>
          <p className='text-sm-regular md:text-md-regular text-neutral-200'>
            Feel free to drop a message for any inquiries or collaborations.
          </p>
        </div>
        <ContactForm className='flex flex-[3.2] basis-80' />
      </div>
    </section>
  );
};

export default ContactMeContainer;
