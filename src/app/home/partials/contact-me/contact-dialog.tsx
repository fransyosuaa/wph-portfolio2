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
      <DialogContent className='flex flex-col items-center gap-6'>
        <Image
          src='/assets/images/container/contact-me/email-sent.svg'
          alt='email sent'
          width={168}
          height={162}
          className='mb-4 max-md:h-29.5 max-md:w-31 md:mb-6'
          loading='lazy'
        />
        <DialogHeader>
          <DialogTitle>Message Sent Successfully</DialogTitle>
          <DialogDescription>
            Thank you for reaching out. I’ll get back to you as soon as possible
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <a href='#home'>
            <Button>Back to Home</Button>
          </a>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
