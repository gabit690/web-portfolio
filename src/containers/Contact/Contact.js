import React from 'react';

import LinkButton from '../../components/LinkButton/LinkButton';
import Copyright from '../../components/Copyright/Copyright';

import './Contact.css';

const Contact = () => {
  return (
    <div id="contact-container" className="container-fluid">
      <h2 
       className="
        text-light
        text-center
        fs-1
        fw-bolder
        py-3
        "
      >
        Find me in:
      </h2>
      <ul 
       id="social-links-container"
       className="
        mx-0
        px-0
        d-flex
        justify-content-evenly
        "
      >
        <LinkButton id="github" icon="bi bi-github" url="https://github.com/gabit690" />
        <LinkButton id="linkedin" icon="bi bi-linkedin" url="https://linkedin.com/in/jg-valeriano" />
      </ul>
      <Copyright
       content="Developed by Gabit"
       year={(new Date()).getFullYear()} 
      />
    </div>
  )
};

export default Contact;