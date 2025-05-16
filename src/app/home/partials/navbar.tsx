'use client';

import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12, 13, 13, 0)', 'rgba(12, 13, 13, 0.5)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(3px)']
  );

  return (
    <motion.header
      style={{ background, backdropFilter }}
      className='fixed top-0 z-50 w-full'
    >
      <div
        className='flex-between custom-container'
        style={{ height: 'clamp(4rem, 6.95vw, 5.25rem)' }}
      >
        <a href='#home'>
          <Image
            src='/assets/images/logo.png'
            alt='logo'
            width={40}
            height={40}
            style={{
              height: 'clamp(1.75rem, 3.31vw, 2.5rem)',
              width: 'clamp(1.75rem, 3.31vw, 2.5rem)',
            }}
          />
        </a>
        <nav className='hidden lg:block'>
          <ul className='flex gap-6'>
            {navigationData.map((item) => (
              <li key={item.label} className='px-2'>
                <a
                  href={item.href}
                  className='hover:bg-gradient-purple-pink text-md-regular bg-neutral-100 bg-clip-text text-transparent'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild className='text-md-medium hidden lg:flex'>
          <a href='#contact-me'>
            <Image
              src='/assets/icons/header/email-icon.png'
              alt='email icon'
              width={18}
              height={15}
            />
            Hire Me
          </a>
        </Button>
        <div className='flex gap-4 lg:hidden'>
          <a
            href='#contact-me'
            className='flex-center bg-gradient-purple-pink h-10 w-10 rounded-full px-2.5 hover:shadow-[0_0_17px_rgba(135,70,235,0.32)]'
          >
            <Image
              src='/assets/icons/header/email-icon.png'
              alt='email icon'
              width={18}
              height={18}
            />
          </a>
          <div className='flex-center cursor-pointer'>
            <Sheet>
              <SheetTrigger asChild>
                <Menu />
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetClose asChild>
                    <a href='#home'>
                      <Image
                        src='/assets/images/logo.png'
                        alt='logo'
                        width={28}
                        height={28}
                      />
                    </a>
                  </SheetClose>
                  <SheetTitle className='hidden'>Menu</SheetTitle>
                </SheetHeader>
                <nav className='mt-5'>
                  <ul className='flex flex-col gap-6'>
                    {navigationData.map((item) => (
                      <li key={item.label}>
                        <SheetClose asChild>
                          <a
                            href={item.href}
                            className='hover:bg-gradient-purple-pink text-md-regular bg-neutral-100 bg-clip-text text-transparent'
                          >
                            {item.label}
                          </a>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <Button asChild className='text-md-medium mt-6'>
                  <SheetClose asChild>
                    <a href='#contact-me'>
                      <Image
                        src='/assets/icons/header/email-icon.png'
                        alt='email icon'
                        width={18}
                        height={15}
                      />
                      Hire Me
                    </a>
                  </SheetClose>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
