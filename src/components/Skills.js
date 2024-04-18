import React from 'react';
import { skillData } from '../assets/data.js';
import {motion} from "framer-motion";
import { listAnimationVariants, slideInFromTop } from './Animations.js';

const Skills = () => {
  return (
    <>
      <div className="skillsSection">
        <motion.div className="sectionHeader"
          variants={slideInFromTop(-45, 0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <h2>Skills</h2>
        </motion.div>
        <div id="skills">
          {skillData.map((skill, index) => (
            <motion.div key={index} className={`skill${index + 1}`}
              variants={listAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <h5>{skill.name}</h5>
              <img className='icon' src={skill.icon} alt={skill.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
