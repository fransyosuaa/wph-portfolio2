import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type ContactDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const ContactDialog = ({ isOpen, onOpenChange }: ContactDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className='before-bg-contact-dialog flex flex-col items-center overflow-hidden text-center'>
        <DialogHeader className='flex-center mx-auto h-40 w-[202px] overflow-hidden md:h-[217px] md:w-[277px]'>
          <Image
            src='/assets/images/container/contact-me/email-sent.svg'
            alt='email sent'
            width={168}
            height={162}
            className='mx-auto max-md:h-29.5 max-md:w-31'
            loading='lazy'
          />
        </DialogHeader>
        <DialogTitle className='mt-4'>Message Sent Successfully</DialogTitle>
        <DialogDescription>
          Thank you for reaching out. I&apos;ll get back to you as soon as
          possible
        </DialogDescription>
        <DialogClose asChild className='mt-4'>
          <a href='#home'>
            <Button>Back to Home</Button>
          </a>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
