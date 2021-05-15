import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

import Header from '../../components/Header/Header';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../manageState/Mapping';

import './Projects.css';

class Projects extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/web-portfolio/dist/backend/data-projects.php'
      })
      .then(result => {
        this.props.loadProjects(result.data)
      })
      .catch(error => console.log(error));
  };

  render() {

    let activeContent = null;

    if (this.props.projectsSection.loading) {
      activeContent = (
        <div 
         className="
          min-container 
          text-center 
          pt-5
          d-flex 
          justify-content-center 
          align-items-center
         "
        >
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else {

      let numberOfProjects = this.props.projectsSection.data.length;
      let buttonsIndicatiors = [];

      for (let index=0; index < numberOfProjects; index++) {
        buttonsIndicatiors.push(
          <button 
           type="button"
           key={index} 
           className={index == 0 ? "active":""}
           aria-current={index == 0 ? "true":""}
           data-bs-target="#thumbnailsCarousel" 
           data-bs-slide-to={index} 
           aria-label={"Slide " + (index + 1)}
          >
          </button>
        );
      }

      activeContent = (
        <div className="container-fluid px-0 mt-5">
          <div 
           id="thumbnailsCarousel" 
           className="carousel slide" 
           data-bs-interval="false"
          >
            <div className="carousel-indicators mb-0">
              {buttonsIndicatiors}
            </div>
            <div class="carousel-inner">
              {
                this.props.projectsSection.data.map((project, index) => {
                  return (
                    <div 
                     className={"carousel-item" + ((index == 0) ? " active":"")}
                     key={index}
                    >
                      <a href={project.url} target="_blank">
                        <img 
                         src={project.image} 
                         className="thumbnail d-block w-100" 
                         alt={project.description}
                        />
                      </a>
                    </div>
                  );
                })
              }
            </div>
            <button 
             className="carousel-control-prev" 
             type="button" 
             data-bs-target="#thumbnailsCarousel" 
             data-bs-slide="prev"
            >
              <span 
               className="carousel-control-prev-icon"
               aria-hidden="true">
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button 
             className="carousel-control-next" 
             type="button" 
             data-bs-target="#thumbnailsCarousel" 
             data-bs-slide="next"
            >
              <span 
               className="carousel-control-next-icon" 
               aria-hidden="true"
              >
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      );

    }

    return (
      <div id="projects-container" className="container-fluid px-0 pb-5 border">
        <Header content="Projects"/>
        {activeContent}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Projects);