import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type TestimonialColumnProps = {
  column: {
    name: string;
    text: string;
    username: string;
    imageSrc: string;
  }[];
  className?: string;
};

export const TestimonialColumn = ({
  column,
  className,
}: TestimonialColumnProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]',
        className
      )}
    >
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
              <div className='font-medium tracking-tight leading-5'>{name}</div>
              <div className='leading-5 tracking-tight'>{username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
