import * as React from 'react';

import BlogFeatureCard from '@/components/blog/blog-grid/blog-cards/blog-feature-card/BlogFeatureCard';
import BlogRightGrid from '@/components/blog/blog-grid/blog-right-grid/grid/Grid';

import { blogTopics } from '../blogs.json';

const BlogGrid: React.FC = () => {
  return (
    <div
      data-aos='zoom-in-up'
      className='my-14 flex flex-col lg:flex-row lg:space-x-20'
    >
      <BlogFeatureCard
        title={blogTopics[0].title}
        summary={blogTopics[0].summary}
        image={blogTopics[0].image}
      />
      <BlogRightGrid />
    </div>
  );
};
export default BlogGrid;
