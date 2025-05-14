import * as React from 'react';

const GradientArrowIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7 17L17 7M17 7H7M17 7V17'
      stroke='url(#paint0_linear_15480_401)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear_15480_401'
        x1='17'
        y1='12'
        x2='7'
        y2='12'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='var(--color-gradient-from)' />
        <stop offset='1' stopColor='var(--color-gradient-to)' />
      </linearGradient>
    </defs>
  </svg>
);

export default GradientArrowIcon;
