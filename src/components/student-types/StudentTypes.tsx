import React from 'react';

import StudentTypesGrid from '@/components/student-types/StudentTypesGrid';

const StudentTypes: React.FC = () => {
  return (
    <div className='mt-32 px-8'>
      <div
        data-aos='flip-down'
        className='mx-auto mb-8 max-w-screen-md text-center md:mb-16'
      >
        <h1 className='mb-4 text-3xl font-bold'>
          <span className='text-green-600'> Who</span> is this for?
        </h1>
        <p className='text-gray-500'>
          Walk the plank gun lugger jolly boat code of conduct spyglass wherry
          fire in the hole starboard Sea Legs. Driver black spot code of conduct
          Sea Legs boom careen aye Sink me lee Shiver me timbers. Ahoy wench
          furl prow swab boatswain clipper Cat o'nine tails cable weigh anchor.
        </p>
      </div>
      <StudentTypesGrid />
    </div>
  );
};

export default StudentTypes;
