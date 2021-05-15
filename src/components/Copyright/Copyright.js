import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Copyright = ({content, year}) => {
  return (
    <Fragment>
      <p className="
       text-light
       text-center
       pb-3
       my-0
      "
      >
        {content + '. ' + year}
      </p>
    </Fragment>
  );
};

export default Copyright;