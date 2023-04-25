import * as React from 'react';

const Intro: React.FC = () => {
  return (
    <div data-aos='zoom-in-right' className='md:w-5/12'>
      <div className='mb-5 flex items-center space-x-20'>
        <span className='absolute w-14 border border-gray-300'></span>
        <h1 className='text-sm tracking-widest text-gray-400'>TESTIMONIALS</h1>
      </div>
      <h1 className='text-darken text-2xl font-semibold lg:pr-40'>
        Hear what people have been saying about us...
      </h1>
      <p className='my-5 text-gray-500 lg:pr-36'>
        We are a community based organisation and value critical feedback in
        order to help us successfully grow to serve others.
      </p>

      <p className='mb-8 text-gray-500 lg:pr-36'>
        Please give your assessment below.
      </p>
      <button className='my-4 flex transform items-center space-x-3 rounded-full border-b border-l border-t border-yellow-500 pl-3 font-medium text-yellow-500 transition duration-300 ease-in-out hover:scale-110 focus:outline-none'>
        <span>Leave us a review </span>
        <div className='flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500'>
          <svg
            className='h-5 w-5'
            viewBox='0 0 26 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z'
              fill='#F48C06'
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
export default Intro;
