import React from 'react';

import ContactForm from './contact-me/contact-form';

const ContactMeContainer = () => {
  return (
    <section className='before-bg-contact relative overflow-hidden'>
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
