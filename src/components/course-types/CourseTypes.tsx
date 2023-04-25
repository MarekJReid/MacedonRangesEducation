import React from 'react';

import CardsGrid from '@/components/course-types/card/CardsGrid';

const CourseTypes: React.FC = () => {
  return (
    <div>
      <div
        data-aos='flip-up'
        className='mx-auto mb-8 mt-24 max-w-xl text-center'
      >
        <h1 className='my-3 text-4xl font-bold text-green-900'>
          Business and Finance Courses <br />
          <span className='text-green-600'>
            Delivered by
            <span className='text-bold text-green-900'> REAL </span>
            peope.
          </span>
        </h1>
        <p className='mb-8 leading-relaxed text-gray-500'>
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
      </div>
      {/* Cards section */}
      <CardsGrid />
    </div>
  );
};

export default CourseTypes;
