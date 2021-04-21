import React from 'react';

import Intro from '../Intro/Intro';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Message from '../Message/Message';
import Contact from '../Contact/Contact';
import ScrollButton from '../../components/ScrollButton/ScrollButton';

import './App.css'

const App = () => {
  return (
    <div id="app-container">
      <Intro/>
      <Skills/>
      <Projects/>
      <Message/>
      <Contact/>
      <ScrollButton/>
    </div>
  );
}

export default App;