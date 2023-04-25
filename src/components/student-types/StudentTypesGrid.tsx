import React from 'react';

import StudentType from '@/components/student-types/StudentType';

import { studentTypes } from './student-types.json';

const StudentTypesGrid: React.FC = () => {
  return (
    <div
      data-aos='fade-up'
      className='mt-7 flex flex-col justify-center space-y-5 md:flex-row md:space-x-6 md:space-y-0 md:px-0 lg:space-x-10'
    >
      {studentTypes.map((type, i) => (
        <StudentType
          key={i}
          title={type.title}
          image={type.image}
          description={type.description}
          link={type.link}
          buttonText={type.buttonText}
        />
      ))}
    </div>
  );
};

export default StudentTypesGrid;
