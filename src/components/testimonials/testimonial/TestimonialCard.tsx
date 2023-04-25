import Image from 'next/image';
import * as React from 'react';

const TestimonialCard: React.FC = () => {
  return (
    <div data-aos='zoom-in-left' className='md:w-7/12'>
      <Image
        className='mx-auto md:w-10/12'
        src='/images/testimonials.png'
        width={1500}
        height={1500}
        alt=''
      />
    </div>
  );
};
export default TestimonialCard;
