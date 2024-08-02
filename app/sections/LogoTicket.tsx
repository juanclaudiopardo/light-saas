'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import acmeLogo from '@/public/logo-acme.png';
import quantumLogo from '@/public/logo-quantum.png';
import echoLogo from '@/public/logo-echo.png';
import pulseLogo from '@/public/logo-pulse.png';
import apexLogo from '@/public/logo-apex.png';

export const LogoTicket = () => {
  return (
    <section id='features' className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div
            className='flex gap-14 flex-none pr-14'
            animate={{ translateX: '-50%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            <Image
              src={acmeLogo}
              alt='Acme logo'
              className='logo-ticket-image'
            />
            <Image
              src={quantumLogo}
              alt='Quantum logo'
              className='logo-ticket-image'
            />
            <Image
              src={echoLogo}
              alt='Echo logo'
              className='logo-ticket-image'
            />
            <Image
              src={pulseLogo}
              alt='Pulse logo'
              className='logo-ticket-image'
            />
            <Image
              src={apexLogo}
              alt='Apex logo'
              className='logo-ticket-image'
            />
            {/* {second loop for transition} */}
            <Image
              src={acmeLogo}
              alt='Acme logo'
              className='logo-ticket-image'
            />
            <Image
              src={quantumLogo}
              alt='Quantum logo'
              className='logo-ticket-image'
            />
            <Image
              src={echoLogo}
              alt='Echo logo'
              className='logo-ticket-image'
            />
            <Image
              src={pulseLogo}
              alt='Pulse logo'
              className='logo-ticket-image'
            />
            <Image
              src={apexLogo}
              alt='Apex logo'
              className='logo-ticket-image'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
