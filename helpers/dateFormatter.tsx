import React from 'react';
import moment from 'moment';

const dateFormatter = (date:any) => {
  return (
    <div>
      {moment(date)?.format('MMMM DD, YYYY')} 
    </div>
  );
};

export default dateFormatter;
