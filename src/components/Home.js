import React, { useEffect, useState } from 'react';
import me from "../assets/myself.png";
import Typewriter from 'typewriter-effect';
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Blast from './Blast';
import Cursor from './Cursor';

import Particle from './ParticlesBackground';
import { FaFileDownload } from 'react-icons/fa';
import resume from "../assets/Documents/Resume.pdf";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000, once: true})
  }, []);

  const nameArray = ['a', 'r', 'y', 'a', 'n', ' ', 'P', 'i', 'n', 't', 'o'];

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <Cursor />
      <Particle />
      <div id="home">
        <section>
          <div className="info">
            <div className='hi'>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>e</span>
              <span className={`${letterClass} _13`}>l</span>
              <span className={`${letterClass} _14`}>l</span>
              <span className={`${letterClass} _15`}>o</span>
              <span className={`${letterClass} _16`}>,</span>{' '}
              <span className={`${letterClass} _17`}>I</span>
              <span className={`${letterClass} _18`}>'</span>
              <span className={`${letterClass} _19`}>m</span>
            </div>
            <div className="name">
              <span className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 210" className='sidebar__logo2'>
                  <path className='animate-logo-1' fill="#e31b6d" d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194L171 209.194Z" />
                  <path className='animate-logo-2' d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
                    fill='cyan' />
                </svg>
              </span>
              <span><Blast letterClass={letterClass} arrayStr={nameArray} indexLetter={18} /></span></div>
            <Typewriter options={{
              strings: ["Software Developer", "Web Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara"
            }} />
            <div className='downloadBtn'>
              <a href={resume} download="resume" >Download CV <span> <FaFileDownload /></span></a>
            </div>
          </div>
          <div className="pic" data-aos="zoom-in">
            <img src={me} alt="Profile" id="myImg"/>
          </div>
        </section>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
