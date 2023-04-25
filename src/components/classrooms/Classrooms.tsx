import React from 'react';

import ClassroomsImage from '@/components/classrooms/Image/ClassroomsImage';
import TextBox from '@/components/classrooms/TextBox/TextBox';

const Classrooms: React.FC = () => {
  return (
    <div className='mt-36 items-center px-8 sm:flex sm:space-x-8 md:px-36'>
      <TextBox />
      <ClassroomsImage />
    </div>
  );
};

export default Classrooms;
