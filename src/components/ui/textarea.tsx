import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'text-sm-regular md:text-md-regular h-42 w-full resize-none rounded-2xl bg-neutral-500 p-3 placeholder:text-neutral-200 md:p-4',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
