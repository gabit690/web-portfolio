import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from '../../components/Header/Header';

import argacPage from '../../assets/img/argac-page.png';
import calculatorPage from '../../assets/img/calculator-page.png';
import contactsPage from '../../assets/img/contacts-page.png';
import counterPage from '../../assets/img/counter-page.png';
import dragdropPage from '../../assets/img/dragdrop-page.png';
import databasePage from '../../assets/img/database-page.png';
import dexterPage from '../../assets/img/dexter-page.png';
import documentationPage from '../../assets/img/documentation-page.png';
import housePage from '../../assets/img/house-page.png';
import markdownPage from '../../assets/img/markdown-page.png';
import storagePage from '../../assets/img/storage-page.png';
import svgPage from '../../assets/img/svg-page.png';
import tributePage from '../../assets/img/tribute-page.png';

import './Projects.css';

const Projects = () => {

  const infoProjects = [
    {
      url: 'https://gabit690.github.io/web-argentina-activista/',
      image: argacPage,
      description: 'Thumbnail Argentina Activista Page'
    },
    {
      url: 'https://gabit-javascript-calculator.netlify.app/',
      image: calculatorPage,
      description: 'Thumbnail Calculator Page'
    },
    {
      url: 'https://administrador-de-contactos.herokuapp.com/',
      image: contactsPage,
      description: 'Thumbnail Contacts Page'
    },
    {
      url: 'https://contador-react-redux.herokuapp.com/',
      image: counterPage,
      description: 'Thumbnail Counter Page'
    },
    {
      url: 'https://html-w3schools-projects.web.app/projects/drag-and-drop/drag-and-drop.html',
      image: dragdropPage,
      description: 'Thumbnail Drag and Drop Page'
    },
    {
      url: 'https://practice-php-gabit.000webhostapp.com/tables/input.php',
      image: databasePage,
      description: 'Thumbnail Database Page'
    },
    {
      url: 'https://dibujo-dexter.web.app/',
      image: dexterPage,
      description: 'Thumbnail Dexter Page'
    }, 
    {
      url: 'https://gabit690.github.io/FCC-documentacion/',
      image: documentationPage,
      description: 'Thumbnail Documentation Page'
    },
    {
      url: 'https://dibujo-parents-house.web.app/',
      image: housePage,
      description: 'Thumbnail House Page'
    },
    {
      url: 'https://fcc-md-previewer.herokuapp.com/',
      image: markdownPage,
      description: 'Thumbnail Markdown Page'
    },
    {
      url: 'https://gabit690.github.io/web-localStorage/',
      image: storagePage,
      description: 'Thumbnail Storage Page'
    },
    {
      url: 'https://html-w3schools-projects.web.app/projects/svg/svg.html',
      image: svgPage,
      description: 'Thumbnail SVG Page'
    },
    {
      url: 'https://gabit690.github.io/FCC-Pagina-Tributo/',
      image: tributePage,
      description: 'Thumbnail Tribute Page'
    }
  ];

  return (
    <div className="container-fluid px-0 pb-5 border">
      <Header content="Projects"/>
      <div className="container-fluid px-0 mt-5">
        <div id="thumbnailsCarousel" className="carousel slide" data-bs-interval="false">
          <div className="carousel-indicators mb-0">
            <button type="button" data-bs-target="#thumbnailsCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
              (element, index) => {
                return <button type="button" key={index} data-bs-target="#thumbnailsCarousel" data-bs-slide-to={element} aria-label={"Slide " + (element + 1)}></button>;
              })
            }
          </div>
          <div class="carousel-inner">
            {
              infoProjects.map((project, index) => {
                return (
                  <div className={"carousel-item" + ((index == 0) ? " active":"")} key={index}>
                    <a href={project.url} target="_blank">
                      <img src={project.image} class="thumbnail d-block w-100" alt={project.description}/>
                    </a>
                  </div>
                );
              })
            }
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#thumbnailsCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#thumbnailsCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>  
  );
};

export default Projects;