import React, {useEffect} from 'react';
import c from "../assets/tech-icons/icons8-c++-96.png";
import html from "../assets/tech-icons/icons8-html-5-96.png";
import css from "../assets/tech-icons/icons8-css3-96.png";
import js from "../assets/tech-icons/icons8-javascript-96.png";
import react from "../assets/tech-icons/icons8-react-native-96.png";
import mongodb from "../assets/tech-icons/icons8-mongodb-96.png";
import mysql from "../assets/tech-icons/icons8-mysql-logo-96.png";
import bootstrap from "../assets/tech-icons/icons8-bootstrap-96.png";
import sass from "../assets/tech-icons/icons8-sass-96.png";
import framer from "../assets/tech-icons/icons8-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-48.png";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true})
  }, []);
  return (
    <>
      <div className="skillsSection">
        <div className="sectionHeader" data-aos="zoom-out-down">
          <h2>Skills</h2>
        </div>
        <div id="skills">
          <div className="skill1" data-aos="zoom-in-right">
            <h5>C++</h5>
            <img className='icon' src={c} alt="C++" />
          </div>
          <div className="skill2" data-aos="zoom-in-right">
            <h5>HTML</h5>
            <img className='icon' src={html} alt="HTML" />
          </div>
          <div className="skill3" data-aos="zoom-in-right">
            <h5>CSS</h5>
            <img className='icon' src={css} alt="CSS" />
          </div>
          <div className="skill4" data-aos="zoom-in-right">
            <h5>JavaScript</h5>
            <img className='icon' src={js} alt="JavaScript" />
          </div>
          <div className="skill5" data-aos="zoom-in-right">
            <h5>ReactJS</h5>
            <img className='icon' src={react} alt="ReactJS" />
          </div>
          <div className="skill6" data-aos="zoom-in-left">
            <h5>MongoDB</h5>
            <img className='icon' src={mongodb} alt="MongoDB" />
          </div>
          <div className="skill7" data-aos="zoom-in-left">
            <h5>MySQL</h5>
            <img className='icon' src={mysql} alt="MySQL" />
          </div>
          <div className="skill8" data-aos="zoom-in-left">
            <h5>BootStrap</h5>
            <img className='icon' src={bootstrap} alt="BootStrap" />
          </div>
          <div className="skill9" data-aos="zoom-in-left">
            <h5>SASS</h5>
            <img className='icon' src={sass} alt="SASS" />
          </div>
          {/* <div className=" skillset">
        <h5>GitHub</h5>
        <img className='icon' src={git} alt="GitHub" />
      </div> */}
          <div className="skill10" data-aos="zoom-in-left">
            <h4>Framer Motion</h4>
            <img className='icon framerIcon' src={framer} alt="framer" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
