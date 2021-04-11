import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Presentation.css';

const Presentation = () => {
  return (
    <div className="container-fluid px-0">
      <div
       id="photo-container"
       className="
        d-flex
        justify-content-evenly 
        align-items-center"
      >
        <i className="bi bi-chevron-double-left d-sm-block"></i>
        <div id="profile-photo" className="my-2 mx-0">FOTO</div>
        <i className="bi bi-chevron-double-right d-sm-block"></i>
      </div>
      <p
       id="profile-name"
       className="headline text-light"
      >
        valeriano, juan gabriel
      </p>
    </div>
  );
};

export default Presentation;