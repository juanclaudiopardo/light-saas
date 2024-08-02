'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import productImage from '@/public/product-image.png';
import pyramideImage from '@/public/pyramid.png';
import tubeImage from '@/public/tube.png';
import { useRef } from 'react';

export const ProductShowCase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'
    >
      <div className='container'>
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Boost you productivity</div>
          </div>
          <h2 className='section-title mt-5'>
            A more effective way to track progress
          </h2>
          <p className='section-description mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            dolores optio omnis ad, veniam sunt non blanditiis rem explicabo
            tempora nesciunt.
          </p>
        </div>
        <div className='relative'>
          <motion.img
            src={productImage.src}
            alt='Product image'
            className='mt-10'
          />
          <motion.img
            src={pyramideImage.src}
            alt='Pyramide image'
            className='hidden md:block absolute -right-36 -top-32'
            height={262}
            width={262}
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt='Tube image'
            className='hidden md:block absolute bottom-24 -left-36'
            height={248}
            width={248}
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowCase;
