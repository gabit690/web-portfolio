import React, { Fragment } from 'react';

import './Header.css';

const Header = ({content}) => {
  return (
    <Fragment>
      <h2
       className="
        text-center
        text-light
        my-0
        py-3
        header-group
       "
      >
       {content}
      </h2>
    </Fragment>
  );
};

export default Header;