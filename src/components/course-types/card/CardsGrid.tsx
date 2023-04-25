import React from 'react';

import Card from './Card';
import { courseTypes } from './course-types.json';

const CardsGrid: React.FC = () => {
  return (
    <div className='mt-28 grid gap-14 pl-16 pr-16 md:grid-cols-3 md:gap-5'>
      {courseTypes.map((courseType, i) => (
        <Card
          key={i}
          title={courseType.title}
          description={courseType.description}
          link='#'
          color={courseType.color}
          buttonText={courseType.button_text}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
