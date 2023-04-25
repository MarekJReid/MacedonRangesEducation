import React, { useEffect, useState } from 'react';

import { useWindowSize } from '~/hooks/useWindowSize';

type NavProps = {
  open?: boolean;
  className?: string;
  width: number | undefined;
};

const Nav: React.FC<NavProps> = ({ className }) => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    width < 700 ? setOpen(false) : setOpen(true);
  }, [width]);

  return (
    <div
      className={`bg-cream w-full text-gray-700 ${className} ${
        open ? 'open' : ''
      }`}
    >
      <div className='mx-auto flex max-w-screen-xl flex-col px-8 md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-row items-center justify-between py-6'>
          <div className='relative md:mt-8'>
            <a
              href='#'
              className='focus:shadow-outline relative z-50 rounded-lg text-lg font-bold tracking-widest text-gray-900 focus:outline-none'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='106'
                height='57.5'
                viewBox='0 0 106 57.5'
              >
                <defs>
                  <clipPath id='clip-path'>
                    <path
                      id='Path_2'
                      data-name='Path 2'
                      d='M0-58H106V-.5H0Z'
                      fill='none'
                    />
                  </clipPath>
                  <clipPath id='clip-path-2'>
                    <path
                      id='Path_1'
                      data-name='Path 1'
                      d='M0,0H106.5V-58H0Z'
                      fill='none'
                    />
                  </clipPath>
                  <clipPath id='clip-path-3'>
                    <rect
                      id='Rectangle_2'
                      data-name='Rectangle 2'
                      width='129.02'
                      height='128.601'
                      transform='translate(0 -128.601)'
                      fill='none'
                    />
                  </clipPath>
                  <pattern
                    id='pattern'
                    preserveAspectRatio='none'
                    width='100%'
                    height='100%'
                    viewBox='0 0 500 500'
                  >
                    <image
                      width='500'
                      height='500'
                      xlinkHref='data:image/png;base64,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SZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZKkWvx/vkjgNkE2csYAAAAASUVORK5CYII='
                    />
                  </pattern>
                </defs>
                <g id='Group_5' data-name='Group 5' transform='translate(0 58)'>
                  <g
                    id='Group_4'
                    data-name='Group 4'
                    clip-path='url(#clip-path)'
                  >
                    <g
                      id='Group_3'
                      data-name='Group 3'
                      clip-path='url(#clip-path-2)'
                    >
                      <g
                        id='Group_2'
                        data-name='Group 2'
                        transform='translate(0 57.507)'
                      >
                        <g
                          id='Group_1'
                          data-name='Group 1'
                          clip-path='url(#clip-path-3)'
                        >
                          <rect
                            id='Rectangle_1'
                            data-name='Rectangle 1'
                            width='129.02'
                            height='128.601'
                            transform='translate(0 -128.601)'
                            fill='url(#pattern)'
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <button
            className='focus:shadow-outline rounded-lg focus:outline-none md:hidden'
            onClick={() => setOpen(!open)}
          >
            <svg fill='currentColor' viewBox='0 0 20 20' className='h-6 w-6'>
              <path
                x-show='!open'
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
              <path
                x-show='open'
                fill-rule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`flex h-0 flex-grow origin-top flex-col pb-4 duration-300 md:flex md:h-auto md:flex-row md:items-center md:justify-end md:pb-0 ${
            open ? 'scale-y-1' : 'scale-y-0'
          }`}
        >
          <a
            className='focus:shadow-outline  rounded-lg bg-transparent px-4 py-2 text-sm hover:text-gray-900 focus:outline-none md:ml-4 md:mt-8'
            href='#'
          >
            Home
          </a>
          <a
            className='focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm hover:text-gray-900 focus:outline-none md:ml-4 md:mt-8'
            href='#'
          >
            Courses
          </a>
          <a
            className='focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm hover:text-gray-900 focus:outline-none md:ml-4 md:mt-8'
            href='#'
          >
            Blog
          </a>
          <a
            className='focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm hover:text-gray-900 focus:outline-none md:ml-4 md:mt-8'
            href='#'
          >
            About Us
          </a>
          <a
            className='mt-2 rounded-full bg-white px-10 py-3 text-center text-sm text-gray-800 md:ml-4 md:mt-8'
            href='#'
          >
            Login
          </a>
          <a
            className='mt-2 rounded-full bg-green-600 px-10 py-3 text-center text-sm text-white md:ml-4 md:mt-8'
            href='#'
          >
            Sign Up
          </a>
        </nav>
      </div>

      {/* TODO: Implement Nav component */}
    </div>
  );
};

export default Nav;
