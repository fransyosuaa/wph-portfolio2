import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'text-sm-regular md:text-md-regular w-full rounded-2xl bg-neutral-500 px-3 py-2 placeholder:text-neutral-200 md:px-4',
        className
      )}
      {...props}
    />
  );
}

export { Input };
