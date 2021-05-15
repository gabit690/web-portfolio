import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from "jquery";

import logoLight from '../../assets/img/logo-dark.png';

import './Menu.css';

const Menu = () => {
  
  $(document).ready(function() {

    let offsetMenu = $('#navbarToggleExternalContent').offset().top;
    
    $(window).on('scroll', function() {

      if ( $(window).scrollTop() > offsetMenu ) {
        $('#navbarToggleExternalContent').addClass('menu-fixed');
      } else {
        $('#navbarToggleExternalContent').removeClass('menu-fixed');

      }
    });

  });

  function hideMenu() {
    $('#navbarToggleExternalContent').removeClass("show");
  }

  return (
    <div id="menu-container" className="container-fluid px-0">
      <nav className="navbar navbar-dark d-sm-none">
        <div className="container-fluid">
          <button 
           className="navbar-toggler" 
           type="button" 
           data-bs-toggle="collapse" 
           data-bs-target="#navbarToggleExternalContent" 
           aria-controls="navbarToggleExternalContent" 
           aria-expanded="false" 
           aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div 
       className="collapse w-100 d-sm-block" 
       id="navbarToggleExternalContent"
      >
        <div 
         id="portfolio-brand" 
         className="container-fluid px-0 pt-0 d-none d-sm-flex"
        >
          <a href="#intro-container" className="text-dark">
            <img src={logoLight} className="logo-small" alt="author's logo"/>
          </a>
        </div>
        <div className="container-fluid px-0" id="menu-buttons">
          <nav className="nav flex-column align-items-center">
            <a 
             className="nav-link btn btn-primary" 
             href="#intro-container" 
             onClick={hideMenu}
            >
              Intro
            </a>
            <a 
             className="nav-link btn btn-primary" 
             href="#skills-container" 
             onClick={hideMenu}
            >
             Skills
            </a>
            <a 
             className="nav-link btn btn-primary" 
             href="#projects-container" 
             onClick={hideMenu}
            >
             Projects
            </a>
            <a 
             className="nav-link btn btn-primary" 
             href="#message-container" 
             onClick={hideMenu}
            >
             Message
            </a>
            <a 
             className="nav-link btn btn-primary" 
             href="#contact-container" 
             onClick={hideMenu}
            >
             Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;