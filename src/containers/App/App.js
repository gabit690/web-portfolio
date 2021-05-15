import React from 'react';
import Intro from '../Intro/Intro';
import Menu from '../../components/Menu/Menu';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import './App.css'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../manageState/Reducers.js';

// React-Linked components
import Projects from '../Projects/Projects';
import Message from '../Message/Message';

// Store
const store = createStore(rootReducer);

const App = () => {
  return (
    <div id="app-container">
      <Intro/>
      <Menu/>
      <Skills/>
      <Provider store={store}>
        <Projects/>
        <Message/>
      </Provider>
      <Contact/>
      <ScrollButton/>
    </div>
  );
}

export default App;