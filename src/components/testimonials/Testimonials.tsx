import * as React from 'react';

import Intro from '@/components/testimonials/intro-left-side/Intro';
import TestimonialCard from '@/components/testimonials/testimonial/TestimonialCard';

const Testimonials: React.FC = () => {
  return (
    <div className='mt-24 flex  w-full items-center justify-center md:flex-row md:space-x-10 md:px-36'>
      <Intro />
      <TestimonialCard />
    </div>
  );
};
export default Testimonials;
