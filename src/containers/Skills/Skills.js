import React from 'react';

import Header from '../../components/Header/Header';
import SkillGroup from '../../components/SkillGroup/SkillGroup';

const Skills = () => {
  return (
    <div id="skills-container" className="container-fluid border px-0">
      <Header content="Skills" />
      <SkillGroup />
    </div>
  );
};

export default Skills;