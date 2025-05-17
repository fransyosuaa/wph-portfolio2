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
  emailStatus: 'success' | 'error';
};

const ContactDialog = ({
  isOpen,
  onOpenChange,
  emailStatus,
}: ContactDialogProps) => {
  const isSuccess = emailStatus === 'success';
  const pathEmailPic = isSuccess ? 'email-sent.svg' : 'email-failed.svg';
  const altText = isSuccess ? 'email sent' : 'send email error';
  const titleText = isSuccess
    ? 'Message Sent Successfully'
    : 'Message failed to send';
  const descriptionText = isSuccess
    ? "Thank you for reaching out. I'll get back to you as soon as possible"
    : 'An unexpected error occurred. Kindly try again in a few moments.';

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className='before-bg-contact-dialog flex flex-col items-center overflow-hidden text-center'>
        <DialogHeader className='flex-center mx-auto h-40 w-[202px] overflow-hidden md:h-[217px] md:w-[277px]'>
          <Image
            src={`/assets/images/container/contact-me/${pathEmailPic}`}
            alt={altText}
            width={168}
            height={162}
            className='mx-auto max-md:h-29.5 max-md:w-31'
            loading='lazy'
          />
        </DialogHeader>
        <DialogTitle className='mt-4'>{titleText}</DialogTitle>
        <DialogDescription>{descriptionText}</DialogDescription>
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
