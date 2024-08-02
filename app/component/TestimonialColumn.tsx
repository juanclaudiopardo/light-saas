import Image from 'next/image';
import React from 'react';

import { motion } from 'framer-motion';

type TestimonialColumnProps = {
  column: {
    name: string;
    text: string;
    username: string;
    imageSrc: string;
  }[];
  className?: string;
  duration?: number;
};

export const TestimonialColumn = ({
  column,
  className,
  duration,
}: TestimonialColumnProps) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: '-50%',
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: duration || 10,
          ease: 'linear',
        }}
        className='flex flex-col gap-6 mt-10 '
      >
        {[...new Array(2)].fill(0).map((_, i) => (
          <React.Fragment key={i}>
            {column.map(({ text, imageSrc, name, username }) => (
              <div key={text} className='card'>
                <div className=''>{text}</div>
                <div className='flex items-center gap-2 mt-5'>
                  <Image
                    src={imageSrc}
                    alt={name}
                    className='h-10 w-10 rounded-full'
                    width={40}
                    height={40}
                  />
                  <div className='flex flex-col'>
                    <div className='font-medium tracking-tight leading-5'>
                      {name}
                    </div>
                    <div className='leading-5 tracking-tight'>{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
