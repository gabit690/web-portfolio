import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from "jquery";

import './Menu.css';
import logoLight from '../../assets/img/logo-dark.png';

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


  return (
    <div id="menu-container" className="container-fluid px-0">
      <nav class="navbar navbar-dark d-sm-none">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div class="collapse w-100 d-sm-block" id="navbarToggleExternalContent">
        <div id="portfolio-brand" class="container-fluid px-0 pt-0 d-none d-sm-flex">
          <a href="#intro-container" className="text-dark">
            <img src={logoLight} className="logo-small" alt="author's logo" />
          </a>
        </div>
        <div className="container-fluid px-0" id="menu-buttons">
          <nav class="nav flex-column align-items-center">
            <a class="nav-link btn btn-primary" href="#intro-container">Intro</a>
            <a class="nav-link btn btn-primary" href="#skills-container">Skills</a>
            <a class="nav-link btn btn-primary" href="#projects-container">Projects</a>
            <a class="nav-link btn btn-primary" href="#message-container">Message</a>
            <a class="nav-link btn btn-primary" href="#contact-container">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;