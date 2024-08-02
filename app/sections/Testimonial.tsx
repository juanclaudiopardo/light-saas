import avatar1 from '@/public/avatar-1.png';
import avatar2 from '@/public/avatar-2.png';
import avatar3 from '@/public/avatar-3.png';
import avatar4 from '@/public/avatar-4.png';
import avatar5 from '@/public/avatar-5.png';
import avatar6 from '@/public/avatar-6.png';
import avatar7 from '@/public/avatar-7.png';
import avatar8 from '@/public/avatar-8.png';
import avatar9 from '@/public/avatar-9.png';
import { TestimonialColumn } from '../component/TestimonialColumn';

const testimonials = [
  {
    text: 'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
    imageSrc: avatar1.src,
    name: 'Jamie Rivera',
    username: '@jamietechguru00',
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: 'Josh Smith',
    username: '@jjsmith',
  },
  {
    text: 'This app has completely transformed how I manage my projects and deadlines.',
    imageSrc: avatar3.src,
    name: 'Morgan Lee',
    username: '@morganleewhiz',
  },
  {
    text: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
    imageSrc: avatar4.src,
    name: 'Casey Jordan',
    username: '@caseyj',
  },
  {
    text: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
    imageSrc: avatar5.src,
    name: 'Taylor Kim',
    username: '@taylorkimm',
  },
  {
    text: 'The customizability and integration capabilities of this app are top-notch.',
    imageSrc: avatar6.src,
    name: 'Riley Smith',
    username: '@rileysmith1',
  },
  {
    text: 'Adopting this app for our team has streamlined our project management and improved communication across the board.',
    imageSrc: avatar7.src,
    name: 'Jordan Patels',
    username: '@jpatelsdesign',
  },
  {
    text: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
    imageSrc: avatar8.src,
    name: 'Sam Dawson',
    username: '@dawsontechtips',
  },
  {
    text: 'Its user-friendly interface and robust features support our diverse needs.',
    imageSrc: avatar9.src,
    name: 'Casey Harper',
    username: '@casey09',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonial = () => {
  return (
    <section id='customers' className='bg-white '>
      <div className='container'>
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Testimonial</div>
          </div>
          <h2 className='section-title mt-5'>What our user say</h2>
          <p className='section-description mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            necessitatibus deserunt at tempore repellendus vero, doloribus
            nesciunt.
          </p>
        </div>
        <div className='flex justify-center gap-6'>
          <TestimonialColumn column={firstColumn} />
          <TestimonialColumn column={secondColumn} className='hidden md:flex' />
          <TestimonialColumn column={thirdColumn} className='hidden lg:flex' />
        </div>
      </div>
    </section>
  );
};
