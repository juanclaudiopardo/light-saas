import React from 'react';
import logo from '@/public/logosaas.png';
import Image from 'next/image';
import SocialX from '@/public/social-x.svg';
import SocialInsta from '@/public/social-insta.svg';
import SocialLinkedin from '@/public/social-linkedin.svg';
import SocialPin from '@/public/social-pin.svg';
import SocialYoutube from '@/public/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className='bg-black text-[#DCDCDC] text-sm py-10 text-center'>
      <div className='container'>
        <div className="inline-flex relative before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:bottom-0 before:top-2">
          <Image src={logo} height={40} alt='sass logo' className='relative' />
        </div>

        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href='#'>About</a>
          <a href='#'>Features</a>
          <a href='#'>Customers</a>
          <a href='#'>Pricing</a>
          <a href='#'>Help</a>
          <a href='#'>Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className='mt-6'>&copy;2024 your company all right reserved.</p>
      </div>
    </footer>
  );
};
