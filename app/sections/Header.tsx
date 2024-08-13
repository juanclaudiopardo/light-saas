'use client';
import React, { useState, MouseEvent } from 'react';
import ArrowRight from '@/public/arrow-right.svg';
import Image from 'next/image';
import Logo from '@/public/logosaas.png';
import Link from 'next/link';
import ScrollSpy from '../utils/ScrollSpy';

type MenuItem = {
  label: string;
  route: string;
};

const menuData: MenuItem[] = [
  { label: 'About', route: '#about' },
  { label: 'Features', route: '#features' },
  { label: 'Pricing', route: '#pricing' },
  { label: 'Customers', route: '#customers' },
];

export const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (
    e: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(sectionId) as HTMLElement | null;
    if (section) {
      const header = document.querySelector('header') as HTMLElement | null;
      if (header) {
        const headerHeight = header.offsetHeight;
        const yOffset = -headerHeight;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setNavbarOpen(false);
  };

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <ScrollSpy menuData={menuData} setActiveSection={setActiveSection} />
      <div className='flex justify-center items-center bg-black text-white text-sm gap-3 py-3'>
        <p className='text-white/60 hidden md:block'>
          Streamline your workflow and boost your productivity
        </p>
        <div className='inline-flex items-center gap-1'>
          <p>Get started for free</p>
          <ArrowRight className='h-4 w-4 ' />
        </div>
      </div>
      <div className='py-5 bg-white md:backdrop-blur-sm md:bg-transparent'>
        <div className='px-4 md:px-10'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <Image src={Logo} alt='Saas logo' width={50} height={50} />
            </Link>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='md:hidden z-50 relative w-6 h-6 mr-4 md:mr-0'
              aria-label={navbarOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`absolute h-0.5 w-6 bg-black transition duration-300 ease-in-out ${
                  navbarOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                  navbarOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-black transition duration-300 ease-in-out ${
                  navbarOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              ></span>
            </button>
            <nav
              className={`${
                navbarOpen ? 'flex' : 'hidden'
              } md:flex flex-col md:flex-row gap-6 text-black/60 items-center absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent py-4 md:py-0 shadow-md md:shadow-none`}
            >
              {menuData.map((item, index) => (
                <Link
                  key={index}
                  href={item.route}
                  onClick={(e) => scrollToSection(e, item.route)}
                  className={`ud-menu-scroll ${
                    activeSection === item.route.slice(1)
                      ? 'text-blue-600 font-bold'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href='#free' onClick={(e) => scrollToSection(e, '#free')}>
                <button className='btn btn-primary'>Get for free</button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
