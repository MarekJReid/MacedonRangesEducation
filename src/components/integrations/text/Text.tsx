import * as React from 'react';

const Text: React.FC = () => {
  return (
    <div data-aos='zoom-in-left' className='md:w-6/12'>
      <div className='mb-5 flex items-center space-x-20'>
        <span className='absolute w-14 border border-gray-300'></span>
        <h1 className='text-sm tracking-widest text-gray-400'>INTEGRATIONS</h1>
      </div>
      <h1 className='text-darken text-2xl font-semibold lg:pr-40'>
        All of the educational{' '}
        <span className='text-yellow-500'> tools and platforms </span>
        you need to succeed
      </h1>
      <p className='my-5 text-gray-500 lg:pr-20'>
        We not only use the most up to date technology and platforms you need to
        succeed. We are here to{' '}
        <span className='font-semibold text-red-500  underline'> HELP </span>{' '}
        you with{' '}
        <span className='font-semibold  text-red-500 underline'>
          {' '}
          EVERY STEP{' '}
        </span>{' '}
        of learning those tools in your learning journey.
      </p>
      <button className='my-4 transform rounded-full border border-yellow-500 px-5 py-3 font-medium text-yellow-500 transition duration-300 ease-in-out hover:scale-110 focus:outline-none'>
        See All Software
      </button>
    </div>
  );
};
export default Text;
