import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import PersonalData from '../../components/PersonalData/PersonalData';

const Intro = () => {
  return (
    <div className="container-fluid border border-danger">
      <div className="row">
        <div className="col-sm-5 border border-primary">
          <PersonalData />
        </div>
        <div className="col-sm-7 border border-primary">
          PRESENTACION
        </div>
      </div>
    </div>
  );
}

export default Intro;