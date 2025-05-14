import React from 'react';

const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='text-sm-regular rounded-full border border-neutral-300 px-4 py-2'>
      {children}
    </div>
  );
};

export default Pill;
