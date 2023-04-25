import * as React from 'react';

import Icons from '@/components/integrations/icons/Icons';
import Text from '@/components/integrations/text/Text';

const Integrations: React.FC = () => {
  return (
    <div className='mt-24 flex flex-col items-start md:flex-row md:space-x-10 md:px-36'>
      <Icons />
      <Text />
    </div>
  );
};
export default Integrations;
