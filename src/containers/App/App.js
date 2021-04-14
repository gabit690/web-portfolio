import React from 'react';

import Intro from '../Intro/Intro';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

import './App.css'

const App = () => {
  return (
    <div id="app-container">
      <Intro />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;