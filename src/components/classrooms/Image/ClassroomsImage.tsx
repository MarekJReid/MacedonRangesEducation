import Image from 'next/image';
import * as React from 'react';

const ClassroomsImage: React.FC = () => {
  return (
    <div data-aos='fade-left' className='relative mt-10 sm:mt-0 sm:w-1/2'>
      <div
        style={{ background: `#17637a` }}
        className='floating absolute -left-3 -top-3 z-0 h-24 w-24 rounded-lg'
      ></div>
      <Image
        className='relative z-40 rounded-xl'
        src='https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt=''
        height={1500}
        width={1500}
      />
      <button className='absolute left-1/2 top-1/2 z-50 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform transform items-center justify-center rounded-full bg-white transition duration-300 ease-in-out hover:scale-110 focus:outline-none'>
        <svg
          className='ml-1 h-5 w-5'
          viewBox='0 0 24 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z'
            fill='#316271'
          />
        </svg>
      </button>
      <div className='floating absolute -bottom-3 -right-3 z-10 h-40 w-40 rounded-lg bg-green-900'></div>
    </div>
  );
};
export default ClassroomsImage;
