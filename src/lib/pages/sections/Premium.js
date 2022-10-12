import React from 'react';
import { CardPayment } from '../../pagos/card';
import Processing from '../../../components/Processing';

const Premium = () => {
  return (
    <div>
       <Processing/>
       <img src="./images/Premium.gif" alt="" className='w-25' />
      {/* <CardPayment/> */}
    </div>
  );
}

export default Premium;
