import React from 'react';

import Section from '@/components/layouts/section';

import { faqData } from '@/constants/faq-data';

import FAQAccordion, { FAQAccordionItem } from './faq/faq-accordion';

const FAQContainer = () => {
  return (
    <Section
      id='faq'
      title='Frequently Asked Question'
      description='Find answers to some of the frequently asked questions below.'
    >
      <FAQAccordion>
        {faqData.map((data, idx) => (
          <FAQAccordionItem key={idx} index={idx} {...data} />
        ))}
      </FAQAccordion>
    </Section>
  );
};

export default FAQContainer;
