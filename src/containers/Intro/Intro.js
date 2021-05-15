import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentation from '../../components/Presentation/Presentation';
import PersonalData from '../../components/PersonalData/PersonalData';
import './Intro.css';

const Intro = () => {
  return (
    <div
     id="intro-container"
     className="
      container-fluid
      d-flex flex-column
      justify-content-evenly
     "
    >
      <Presentation/>
      <PersonalData/>
    </div>
  );
}

export default Intro;