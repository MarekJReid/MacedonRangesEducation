import * as React from 'react';

import Blogs from '@/components/blog/Blogs';
import Classrooms from '@/components/classrooms/Classrooms';
import CourseTypes from '@/components/course-types/CourseTypes';
import Hero from '@/components/hero/Hero';
import Integrations from '@/components/integrations/Integrations';
import Layout from '@/components/layout/Layout';
import Nav from '@/components/nav/Nav';
import Seo from '@/components/Seo';
import StudentTypes from '@/components/student-types/StudentTypes';
import Testimonials from '@/components/testimonials/Testimonials';
import TrustSeal from '@/components/trust-seal/TrustSeal';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Nav />
      <Hero title='' description='' backgroundImage='' />
      <TrustSeal />
      <CourseTypes />
      <StudentTypes />
      <Classrooms />
      <Integrations />
      <Testimonials />
      <Blogs />
      <footer
        className='mt-32'
        style={{ backgroundColor: `rgba(37, 38, 65, 1)` }}
      >
        <div className='mx-auto max-w-lg'>
          <div className='flex items-center justify-center px-20 py-12 text-white sm:px-36'>
            <div className='relative'>
              <h1 className='relative z-50 pr-5 text-xl font-bold'>
                Macedon Rangers Education
              </h1>
              <svg
                className='absolute -left-3 -top-2 z-40 h-11 w-11'
                viewBox='0 0 79 79'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M35.9645 2.94975C37.9171 0.997129 41.0829 0.997127 43.0355 2.94975L76.0502 35.9645C78.0029 37.9171 78.0029 41.0829 76.0503 43.0355L43.0355 76.0502C41.0829 78.0029 37.9171 78.0029 35.9645 76.0503L2.94975 43.0355C0.997129 41.0829 0.997127 37.9171 2.94975 35.9645L35.9645 2.94975Z'
                  stroke='#26C1F2'
                  strokeWidth='2'
                />
              </svg>
            </div>
            <span className='border-l border-gray-500 py-2 pl-5 text-sm font-semibold'>
              Community driven education
            </span>
          </div>
          <div className='pb-16 pt-5 text-center'>
            <label className='font-semibold text-gray-300'>
              Subscribe to get our Newsletter
            </label>
            <div className='mt-3 flex flex-col justify-center space-y-3 px-5 sm:flex-row sm:space-x-3 sm:space-y-0 sm:px-0'>
              <input
                type='email'
                placeholder='Your Email'
                className='rounded-full border border-gray-400 bg-transparent py-2 pl-5'
              />
              <button
                type='submit'
                className='mx-auto w-40 rounded-full px-5 py-2 font-semibold text-white sm:mx-0 sm:w-auto'
                style={{
                  background: `linearGradient(105.5deg, #545AE7 19.57%, #393FCF 78.85%)`,
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className='flex items-center justify-center text-sm text-gray-400'>
            <a href='' className='pr-3'>
              Careers
            </a>
            <a href='' className='border-l border-gray-400 px-3'>
              Privacy
            </a>
            <a href='' className='border-l border-gray-400 pl-3'>
              Terms & Conditions
            </a>
          </div>
          <div className='text-center text-white'>
            <p className='my-3 text-sm text-gray-400'>
              &copy; 2023 Marek J. Reid Technologies Inc.{' '}
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
