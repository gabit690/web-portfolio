import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import SkillField from '../SkillField/SkillField';

import logos from '../../assets/logos';

import './SkillGroup.css';

const languageSkills = [
  {
    title: 'Css3',
    level: 'advanced'
  },
  {
    title: 'Html5',
    level: 'pro'
  },
  {
    title: 'Javascript',
    level: 'intermediate'
  },
  {
    title: 'Php',
    level: 'advanced'
  },
  {
    title: 'Sql',
    level: 'pro'
  },
  {
    title: 'Python',
    level: 'intermediate'
  },
  {
    title: 'Java',
    level: 'advanced'
  }
];

const frameworkSkills = [
  {
    title: 'Bootstrap',
    level: 'advanced'
  },
  {
    title: 'ReactJS',
    level: 'pro'
  },
  {
    title: 'Redux',
    level: 'intermediate'
  },
  {
    title: 'Sass',
    level: 'advanced'
  }
];

const librarySkills = [
  {
    title: 'JQuery',
    level: 'advanced'
  }
];

const dataGroups = [
  {
    idHeading: 'language-skills',
    idCollapse: 'language-collapse',
    title: 'Languages',
    bodyContent: languageSkills.map((data, index) => {
      return (
        <SkillField
         name={data.title}
         logo={logos[data.title]}
         level={data.level}
         key={index} 
        />);
    })
  },
  {
    idHeading: 'framework-skills',
    idCollapse: 'framework-collapse',
    title: 'Frameworks',
    bodyContent: frameworkSkills.map((data, index) => {
      return (
        <SkillField
         name={data.title}
         logo={logos[data.title]}
         level={data.level}
         key={index} 
        />);
    })
  },
  {
    idHeading: 'library-skills',
    idCollapse: 'library-collapse',
    title: 'Libraries',
    bodyContent: librarySkills.map((data, index) => {
      return (
        <SkillField
         name={data.title}
         logo={logos[data.title]}
         level={data.level}
         key={index} 
        />);
    })
  }
];

const groupsItems = dataGroups.map((data, index) => {
  return (
    <div className="accordion-item" key={index}>
      <h2 className="accordion-header" id={data.idHeading}>
        <button
         className="accordion-button collapsed fw-bold"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target={'#' + data.idCollapse}
         aria-expanded="false"
         aria-controls={data.idCollapse}
        >
          {data.title} <i class="bi bi-chevron-down"></i>
        </button>
      </h2>
      <div
       id={data.idCollapse}
       className="accordion-collapse collapse"
       aria-labelledby={data.idHeading}
       data-bs-parent="#accordion-container"
      >
        <div className="accordion-body">
          {data.bodyContent}
        </div>
      </div>
    </div>
  );
});

const SkillGroup = ({title}) => {
  return (
    <div className="accordion accordion-flush container-fluid my-5 w-75 px-0 shadow-lg" id="accordion-container">
      {groupsItems}
    </div>
  );
}

export default SkillGroup;