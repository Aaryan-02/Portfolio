import React from 'react';
import { skillData } from '../assets/data.js';

const Skills = () => {
  return (
    <>
      <div className="skillsSection">
        <div className="sectionHeader">
          <h2>Skills</h2>
        </div>
        <div id="skills">
          {skillData.map((skill, index) => (
            <div key={index} className={`skill${index + 1}`}>
              <h5>{skill.name}</h5>
              <img className='icon' src={skill.icon} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
