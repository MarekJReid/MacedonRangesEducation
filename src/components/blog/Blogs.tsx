import * as React from 'react';

import BlogGrid from '@/components/blog/blog-grid/BlogGrid';
import Intro from '@/components/blog/intro/Intro';

const Blogs: React.FC = () => {
  return (
    <div className='mb-56 mt-16 px-8 md:px-36'>
      <Intro />
      <BlogGrid />
    </div>
  );
};
export default Blogs;
