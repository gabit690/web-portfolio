import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './LinkButton.css';

const LinkButton = ({id, icon, url}) => {
  
  function handleClick() {
    window.open(url);
  }
  
  return (
    <button
     id={id}
     title={id}
     onClick={handleClick}
     className="social-link btn btn-secondary shadow-lg"
    >
      <i className={icon}></i>
    </button>
  );
};

export default LinkButton;