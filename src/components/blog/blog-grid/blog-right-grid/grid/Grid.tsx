import * as React from 'react';

import BlogSmallCard from '@/components/blog/blog-grid/blog-cards/blog-small-card/BlogSmallCard';

import { blogTopics } from '../../../blogs.json';
type BlogTopic = {
  title: string;
  summary: string;
  image: string;
};
const BlogRightGrid: React.FC = () => {
  return (
    <div className='mt-12 flex flex-col justify-between space-y-5 lg:mt-0 lg:w-7/12 lg:space-y-0'>
      {blogTopics.map(
        (blog: BlogTopic, i: number) =>
          i > 0 && (
            <BlogSmallCard
              title={blog.title}
              summary={blog.summary}
              image={blog.image}
            />
          )
      )}
    </div>
  );
};
export default BlogRightGrid;
