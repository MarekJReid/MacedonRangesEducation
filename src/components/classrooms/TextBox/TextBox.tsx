import * as React from 'react';

const TextBox: React.FC = () => {
  return (
    <div data-aos='fade-right' className='relative sm:w-1/2'>
      <div className='absolute -left-4 -top-3 z-0 h-12 w-12 animate-pulse rounded-full bg-yellow-500'></div>
      <h1 className='text-darken relative z-50 text-2xl font-semibold lg:pr-10'>
        All our courses are presented both <span> </span>
        <span className='text-yellow-500 underline'>in person AND online</span>
      </h1>
      <p className='py-5 lg:pr-32'>
        Blended learning combines online and in person classroom delivery to
        provide a flexible and versatile learning experience. It allows students
        to access content and interact with instructors both remotely and in
        person. This approach balances the benefits of technology with the
        importance of face-to-face interaction, providing opportunities for
        hands-on learning and collaboration. Students can enjoy the convenience
        of online classes while still benefitting from the social aspect of
        in-person classes.
      </p>
      <a
        href=''
        className='lg:text-md text-s w-full transform rounded-full bg-green-800  px-8 py-3 font-medium text-white transition duration-300 ease-in-out hover:scale-110 focus:outline-none'
      >
        Learn More
      </a>
    </div>
  );
};
export default TextBox;
