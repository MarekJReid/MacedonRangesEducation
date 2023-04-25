import Image from 'next/image';
import React from 'react';

type StudentTypeProps = {
  title: string;
  image: string;
  description: string;
  link: string;
  buttonText: string;
};

const StudentType: React.FC<StudentTypeProps> = ({
  title,
  image,
  buttonText,
}) => {
  return (
    <div className='relative transition duration-700 ease-in-out hover:scale-105 md:w-5/12'>
      <Image
        className='rounded-2xl'
        src={image}
        alt=''
        height={900}
        width={1500}
        style={{ height: `100%` }}
      />
      <div className='absolute bottom-0 left-0 right-0 h-full w-full rounded-2xl bg-black bg-opacity-20'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform md:-translate-y-1/4'>
          <h1 className='lg:text-xxl mb-3  mt-28 text-center font-bold uppercase text-white'>
            {title}
          </h1>
          <button className='lg:text-md text-s w-full transform rounded-full  bg-green-800 px-8 py-3 font-medium text-white transition duration-300 ease-in-out hover:scale-110 focus:outline-none'>
            {buttonText.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentType;
