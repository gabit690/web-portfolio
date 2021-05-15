import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './PersonalData.css';

const PersonalData = () => {
  return (
    <div className="container-fluid px-0">
      <p
       id="profile-role"
       className="headline text-light"
      >
        <i className="bi bi-briefcase-fill text-white"></i> developer
      </p>
      <p
       id="profile-address"
       className="headline text-light"
      >
        <i className="bi bi-geo-alt-fill text-danger"></i> flores, capital Federal
      </p>
    </div>
  );
};

export default PersonalData;