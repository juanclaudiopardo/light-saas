import React from 'react';
import ArrowRight from '@/public/arrow-right.svg';
import Image from 'next/image';
import Logo from '@/public/logosaas.png';
import MenuIcon from '@/public/menu.svg';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='flex justify-center items-center bg-black text-white text-sm gap-3 py-3'>
        <p className='text-white/60 hidden md:block'>
          Streamline your workflow and boost your productivity
        </p>
        <div className='inline-flex items-center gap-1'>
          <p>Get started for free</p>
          <ArrowRight className='h-4 w-4 ' />
        </div>
      </div>
      <div className='py-5'>
        <div className='px-10'>
          <div className='flex items-center justify-between '>
            <Image src={Logo} alt='Saas logo' width={50} height={50} />
            <MenuIcon className='h-5 w-5 md:hidden' />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#'>About</a>
              <a href='#'>Features</a>
              <a href='#'>Customers</a>
              <a href='#'>Updates</a>
              <a href='#'>Help</a>
              <button className='btn btn-primary'>Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
