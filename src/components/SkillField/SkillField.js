import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './SkillField.css';

const SkillField = ({name, logo, level}) => {
  return (
    <div className="container-fluid border-bottom border-secondary">
      <div className="row">
        <div
         className="
          col-6
          col-md-7 
          d-flex 
          justify-content-evenly 
          align-items-center
          py-3
         "
        >
          <img
           src={logo} 
           alt={name + " logo"} 
           className="logo"
          />
          <p className="d-none d-md-block fs-3 fst-italic mb-0">{name}</p>
        </div>
        <div
         className="
          col-6 
          col-md-5 
          d-flex
          justify-content-center
          align-items-center
         "
        >
          <div className={`level ${level}`}>
            <div className="level-bar"></div>
            <div className="level-bar"></div>
            <div className="level-bar"></div>
            <div className="level-bar"></div>
            <div className="level-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillField;