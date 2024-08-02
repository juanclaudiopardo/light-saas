import ArrowRight from '@/public/arrow-right.svg';
import starImage from '@/public/star.png';
import springImage from '@/public/spring.png';
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <section
      id='free'
      className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'
    >
      <div className='container'>
        <div className='max-w-[540px] mx-auto relative'>
          <h2 className='section-title'>Sign up for free today</h2>
          <p className='section-description mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            velit odit sit.
          </p>
          <Image
            src={starImage}
            width={360}
            className='absolute -left-[350px] -top-[137px]'
            alt='Star image'
          />
          <Image
            src={springImage}
            alt='Spring image'
            width={360}
            className='absolute -right-[331px] -top-[19px] '
          />
        </div>
        <div className='flex gap-2 mt-10 justify-center'>
          <button className='btn btn-primary'>Get for free</button>
          <button className='btn btn-text gap-1 '>
            <span>Learn more</span>
            <ArrowRight className='h-5 w-5' />
          </button>
        </div>
      </div>
    </section>
  );
};
