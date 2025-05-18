import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  contactFormSchema,
  ContactFormData,
} from '@/components/forms/contact-form-schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import ContactDialog from '@/app/home/partials/contact-me/contact-dialog';
import { cn } from '@/lib/utils';

type ContactFormProps = {
  className?: string;
};

const ContactForm = (props: ContactFormProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [sendEmailStatus, setSendEmailStatus] = useState<'success' | 'error'>(
    'success'
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/send-email', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSendEmailStatus('success');
      setIsDialogOpen(true);
    } catch (error) {
      setSendEmailStatus('error');
      console.error('Error sending email:', error);
      setIsDialogOpen(true);
    } finally {
      reset();
    }
  };

  return (
    <>
      <div
        className={cn(
          'rounded-3xl bg-neutral-100/5 backdrop-blur-2xl md:rounded-4xl',
          props.className
        )}
      >
        <form
          className='flex w-full flex-col gap-4 p-4 md:gap-5 md:p-6'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              type='text'
              placeholder='Name'
              autoComplete='off'
              {...register('name')}
            />
            {errors.name && (
              <p className='text-sm text-red-500'>{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              type='email'
              placeholder='Email'
              autoComplete='off'
              {...register('email')}
            />
            {errors.email && (
              <p className='text-sm text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div>
            <Textarea
              placeholder='Message'
              autoComplete='off'
              {...register('message')}
            />
            {errors.message && (
              <p className='text-sm text-red-500'>{errors.message.message}</p>
            )}
          </div>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send'}
          </Button>
        </form>
      </div>
      <ContactDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        emailStatus={sendEmailStatus}
      />
    </>
  );
};

export default ContactForm;
