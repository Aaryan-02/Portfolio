import React from 'react';
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop, slideInFromRight } from '../utils/Animations.js';
// import $ from 'jquery';
import { ProjectData } from '../assets/data.js';


import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from 'swiper/modules';
// import "../styles/projects.scss";

export function ProjectCard({ imageSrc, title, description, visitURL }) {
  return (
    <li className="card">
      <section>
        <article>
          <div className="workitem">
            <img src={imageSrc} alt={title} />
            <aside>
              <h3 className="projectTitle">{title}</h3>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
              <div className='proLinks'>
                <a className='visit' href={visitURL} target="_blank" rel="noreferrer">Visit Project</a>
              </div>
            </aside>
          </div>
        </article>
      </section>
    </li>
  )
}

const Projects = () => {

  return (
    <div id="projectSection">
      <motion.div className="sectionHeader"
          // style={{padding: '2.5rem'}}
          variants={slideInFromTop(-45, 0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <h2>Projects</h2>
        </motion.div>
        <motion.div className='slidingText' 
          variants={slideInFromRight(45, 0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        ></motion.div>
    <main id='project-sliders'>
      <div className='project-container'>
      <div className="swiper-button-prev"></div>
          <Swiper
            modules={[Pagination, Navigation]}
            grabCursor={true}
            initialSlide={2}
            centeredSlides={true}
            slidesPerView="auto"
            speed={800}
            slideToClickedSlide={true}
            pagination={{el : ".swiper-pagination", clickable: true}}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              320: {spaceBetween: 40},
              430: {spaceBetween: 50},
              580: {spaceBetween: 70},
              650: {spaceBetween: 30},
            }}
          >
            {ProjectData.map((project, index) => (
              <SwiperSlide key={index} className={`swiper-slide slide-${index + 1}`}>
                <div className="title">
                <h1>{project.title}</h1>
              </div>
              <div className="content">
                <div className="text">
                  <h2>{project.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                </div>
                <div className="genre">
                <a style={{ "--i": 1}} className='visit' href={project.visitURL} target="_blank" rel="noreferrer">Visit Project</a>
                </div>
              </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
            <div className="swiper-button-next"></div>
      </div>
    </main>
    </div>
  )
}

export default Projects;