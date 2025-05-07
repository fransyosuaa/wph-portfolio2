'use client';
import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
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
      <div className='flex-between custom-container h-16 md:h-21'>
        <Image
          src='/assets/images/logo.png'
          alt='logo'
          width={40}
          height={40}
          className='max-md:h-7 max-md:w-7'
        />
        <nav className='hidden lg:block'>
          <ul className='flex gap-6'>
            {navigationData.map((item) => (
              <li key={item.label} className='px-2'>
                <Link
                  href={item.href}
                  className='hover:bg-gradient-purple-pink text-md-regular bg-neutral-100 bg-clip-text text-transparent'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          asChild
          className='text-md-medium hidden text-neutral-100 lg:flex'
        >
          <a href='#'>
            <Image
              src='/assets/icons/header/emailIcon.png'
              alt='email-icon'
              width={18}
              height={15}
            />
            Hire Me
          </a>
        </Button>
        <div className='flex gap-4 lg:hidden'>
          <a
            href='#'
            className='flex-center bg-gradient-purple-pink h-10 w-10 rounded-full px-2.5 hover:shadow-[0_0_17px_rgba(135,70,235,0.32)]'
          >
            <Image
              src='/assets/icons/header/emailIcon.png'
              alt='email-icon'
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
                  <Image
                    src='/assets/images/logo.png'
                    alt='logo'
                    width={28}
                    height={28}
                  />
                  <SheetTitle className='hidden'>Menu</SheetTitle>
                </SheetHeader>
                <nav className='mt-5'>
                  <ul className='flex flex-col gap-6'>
                    {navigationData.map((item) => (
                      <li key={item.label}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className='hover:bg-gradient-purple-pink text-md-regular bg-neutral-100 bg-clip-text text-transparent'
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <Button
                  asChild
                  className='text-md-medium mt-6 text-neutral-100'
                >
                  <SheetClose asChild>
                    <a href='#'>
                      <Image
                        src='/assets/icons/header/emailIcon.png'
                        alt='email-icon'
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
