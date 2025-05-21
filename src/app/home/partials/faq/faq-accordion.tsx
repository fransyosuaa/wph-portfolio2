import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type FAQAccordionItemProps = {
  index: number;
  question: string;
  answer: string;
};

export const FAQAccordionItem = (props: FAQAccordionItemProps) => {
  const { index, question, answer } = props;
  return (
    <AccordionItem value={`${index}`}>
      <div className='group-data-[state=open]:from-gradient-from group-data-[state=open]:to-gradient-to relative rounded-2xl p-[1px] transition-all group-data-[state=open]:bg-gradient-to-r'>
        <div className='rounded-2xl bg-neutral-500 px-4 py-4 md:px-6'>
          <AccordionTrigger className='text-md-semibold md:text-xl-semibold md:data-[state=open]:mt-2'>
            {question}
          </AccordionTrigger>
          <AccordionContent className='text-sm-regular md:text-md-regular mt-3 text-neutral-200 md:mt-4 md:group-data-[state=open]:mb-2'>
            {answer}
          </AccordionContent>
        </div>
      </div>
    </AccordionItem>
  );
};

type FAQAccordionItemElement = React.ReactElement<typeof FAQAccordionItem>;

type FAQAccordionProps = {
  children: FAQAccordionItemElement | FAQAccordionItemElement[];
};

const FAQAccordion = (props: FAQAccordionProps) => {
  return (
    <Accordion type='single' collapsible>
      <div className='flex w-full flex-col gap-4 md:gap-5'>
        {React.Children.map(props.children, (child) => child)}
      </div>
    </Accordion>
  );
};

export default FAQAccordion;
