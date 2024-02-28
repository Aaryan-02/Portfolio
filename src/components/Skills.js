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
          {/* <div className=" skillset">
            <h5>GitHub</h5>
            <img className='icon' src={git} alt="GitHub" />
          </div>
          <div className="skill10" >
            <h4>Framer Motion</h4>
            <img className='icon framerIcon' src={framer} alt="framer" />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Skills
