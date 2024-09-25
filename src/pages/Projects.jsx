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

{/* <SwiperSlide className='swiper-slide slide-1'>
              
              
            </SwiperSlide>
            <SwiperSlide className='swiper-slide slide-2'>
              <div className="title">
                <h1>Bear</h1>
              </div>
              <div className="content">
                <div className="text">
                  <h2>The Bear</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint explicabo ut nemo adipisci rerum ea iusto, provident, inventore natus delectus? Aperiam nobis dolores aut recusandae iusto. Veritatis, repellendus eaque culpa expedita, quas, laboriosam fugit mollitia adipisci magni ea sapiente aut unde assumenda et quo veniam tenetur minima labore eum qui vel. Eum obcaecati nihil eius alias, consequatur enim inventore voluptatibus, quaerat harum delectus culpa fuga odit perferendis deserunt. Esse?
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1}}>Drama</span>
                  <span style={{ "--i": 2}}>Comedy</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide slide-3'>
              <div className="title">
                <h1>Bear</h1>
              </div>
              <div className="content">
                <div className="text">
                  <h2>The Bear</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint explicabo ut nemo adipisci rerum ea iusto, provident, inventore natus delectus? Aperiam nobis dolores aut recusandae iusto. Veritatis, repellendus eaque culpa expedita, quas, laboriosam fugit mollitia adipisci magni ea sapiente aut unde assumenda et quo veniam tenetur minima labore eum qui vel. Eum obcaecati nihil eius alias, consequatur enim inventore voluptatibus, quaerat harum delectus culpa fuga odit perferendis deserunt. Esse?
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1}}>Drama</span>
                  <span style={{ "--i": 2}}>Comedy</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide slide-4'>
              <div className="title">
                <h1>Bear</h1>
              </div>
              <div className="content">
                <div className="text">
                  <h2>The Bear</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint explicabo ut nemo adipisci rerum ea iusto, provident, inventore natus delectus? Aperiam nobis dolores aut recusandae iusto. Veritatis, repellendus eaque culpa expedita, quas, laboriosam fugit mollitia adipisci magni ea sapiente aut unde assumenda et quo veniam tenetur minima labore eum qui vel. Eum obcaecati nihil eius alias, consequatur enim inventore voluptatibus, quaerat harum delectus culpa fuga odit perferendis deserunt. Esse?
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1}}>Drama</span>
                  <span style={{ "--i": 2}}>Comedy</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide slide-5'>
              <div className="title">
                <h1>Bear</h1>
              </div>
              <div className="content">
                <div className="text">
                  <h2>The Bear</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint explicabo ut nemo adipisci rerum ea iusto, provident, inventore natus delectus? Aperiam nobis dolores aut recusandae iusto. Veritatis, repellendus eaque culpa expedita, quas, laboriosam fugit mollitia adipisci magni ea sapiente aut unde assumenda et quo veniam tenetur minima labore eum qui vel. Eum obcaecati nihil eius alias, consequatur enim inventore voluptatibus, quaerat harum delectus culpa fuga odit perferendis deserunt. Esse?
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1}}>Drama</span>
                  <span style={{ "--i": 2}}>Comedy</span>
                </div>
              </div>
            </SwiperSlide> */}

// <ul className = "cards" >
//           <ProjectCard {...ProjectData[0]} />
//           <ProjectCard {...ProjectData[1]} />
//           <ProjectCard {...ProjectData[2]} />
//           <ProjectCard {...ProjectData[3]} />
//           <ProjectCard {...ProjectData[4]} />
//           <ProjectCard {...ProjectData[5]} />
//</ul>

 // $.fn.buttonCards = function () {
  //   return this.each(function () {
  //     var $this = $(this),
  //       $cards = $this.find('.card');
  
  //     function animateCards() {
  //       var $current = $cards.filter('.card--current'),
  //         $next;
  
  //       if (!$current.length) {
  //         $current = $cards.last();
  //       } else {
  //         $next = $current.next();
  //         $next = $next.length ? $next : $cards.first();
  //         $current.removeClass('card--current').addClass('card--out');
  //       }
  
  //       $next.addClass('card--current');
  //       $next.next().addClass('card--next');
  //       $current.removeClass('card--out');
  
  //       // Ensure only one card has 'card--next' class
  //       $cards.not($next).removeClass('card--next');
  //     }
  
  //     $this.addClass('cards--active');
  
  //     // Bind the animation function to the button click event
  //     $('#projectBtn').on('click', function () {
  //       animateCards();
  //     });
  //   });
  // };
  // const handleButtonClick = () => {
  //   $('.cards').buttonCards();
  // }