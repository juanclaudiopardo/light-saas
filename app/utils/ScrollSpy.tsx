'use client';
import React, { useEffect } from 'react';

type MenuItem = {
  label: string;
  route: string;
};

type ScrollSpyProps = {
  menuData: MenuItem[];
  setActiveSection: (section: string) => void;
};

const ScrollSpy: React.FC<ScrollSpyProps> = ({
  menuData,
  setActiveSection,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector('header');

      if (header) {
        const headerHeight = header.offsetHeight;

        for (const item of menuData) {
          const section = document.querySelector(
            item.route
          ) as HTMLElement | null;
          if (section) {
            const sectionTop = section.offsetTop - headerHeight - 20;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionBottom
            ) {
              setActiveSection(item.route.slice(1));
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuData, setActiveSection]);

  return null;
};

export default ScrollSpy;
