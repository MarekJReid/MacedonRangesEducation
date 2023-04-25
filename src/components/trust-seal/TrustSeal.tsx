import Image from 'next/image';
import React from 'react';

import companiesArr from './companies.json';

const TrustSeal: React.FC = () => {
  return (
    <div className='mx-auto max-w-6xl py-16'>
      <h1 className='mb-3 text-center font-medium text-gray-400'>
        A trusted community organisation
      </h1>
      <div className='grid grid-cols-3 justify-items-center  py-8 lg:grid-cols-6'>
        {companiesArr.companies.map((company, i) => (
          <Image
            height={150}
            width={150}
            key={i}
            className='h-7 '
            src={company.logo}
            alt={company.name}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustSeal;
