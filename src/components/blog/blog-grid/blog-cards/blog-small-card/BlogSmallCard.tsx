import Image from 'next/image';
import * as React from 'react';

type BlogSmallCardProps = {
  title: string;
  summary: string;
  image: string;
};
const BlogSmallCard: React.FC<BlogSmallCardProps> = ({
  title,
  summary,
  image,
}) => {
  return (
    <div className='flex space-x-5'>
      <div className='w-4/12'>
        <div className='relative'>
          <Image
            alt='blogname'
            className='h-40 w-full rounded-xl'
            src={image}
            height={50}
            width={170}
          />
          <span className='text-darken absolute bottom-2 right-2 hidden rounded-full bg-yellow-300 px-4 py-px text-sm font-semibold sm:block'>
            PRESS RELEASE
          </span>
        </div>
      </div>
      <div className='w-8/12'>
        <h1 className='text-sm font-semibold text-gray-800 sm:text-lg'>
          {title}
        </h1>
        <p className='sm:text-md text-md my-2 text-gray-500 sm:my-4'>
          {summary}
        </p>
      </div>
    </div>
  );
};
export default BlogSmallCard;
