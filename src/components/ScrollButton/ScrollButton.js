import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import $ from "jquery";

import './ScrollButton.css';

const ScrollButton = () => {

  $(window).scroll(function() {
    if ($(window).scrollTop() > 0 ) {
      $('#scroller').fadeIn(400);
    } else {
      $('#scroller').fadeOut(400);
    }
  });


  function handleClick() {
    $('body, html').animate({
      scrollTop: '0px'
    }, 400);
  }

  return (
    <button
     id="scroller"
     className="
      btn 
      btn-info 
      text-light
      rounded
      shadow
     "
     onClick={handleClick}
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  );
};

export default ScrollButton;