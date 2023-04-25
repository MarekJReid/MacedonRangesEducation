import Image from 'next/image';
import * as React from 'react';

type BlogFeatureCardProps = {
  title: string;
  summary: string;
  image: string;
};
const BlogFeatureCard: React.FC<BlogFeatureCardProps> = ({
  title,
  summary,
  image,
}) => {
  return (
    <div className='lg:w-6/12'>
      <span className='text-darken rounded-full bg-yellow-300 px-4 py-px text-sm font-semibold'>
        NEWS
      </span>
      <h1 className='my-3 text-xl font-semibold text-gray-800'>{title}</h1>
      <p className='mb-3 text-gray-500'>{summary}</p>
      <a href='' className='underline'>
        Read more
      </a>
      <Image
        className='mt-6 w-full'
        src={image}
        height={10}
        width={550}
        alt='feature'
      />
    </div>
  );
};
export default BlogFeatureCard;
