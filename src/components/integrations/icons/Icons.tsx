import Image from 'next/image';
import React from 'react';

const Icons = () => {
  return (
    <div data-aos='zoom-in-right' className='md:w-6/12'>
      <Image
        alt=''
        className='mx-auto md:w-8/12'
        src='/images/integrations.png'
        width={900}
        height={900}
      />
    </div>
  );
};

export default Icons;
