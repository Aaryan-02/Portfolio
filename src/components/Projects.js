import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop, slideInFromRight } from './Animations.js';
import $ from 'jquery';
import { ProjectData } from '../assets/data.js';
import { FaArrowCircleDown } from "react-icons/fa";

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
  $.fn.commentCards = function () {
    return this.each(function () {

      var $this = $(this),
        $cards = $this.find('.card'),
        $current = $cards.filter('.card--current'),
        $next;

      $cards.on('click', function () {
        if (!$current.is(this)) {
          $cards.removeClass('card--current card--out card--next');
          $current.addClass('card--out');
          $current = $(this).addClass('card--current');
          $next = $current.next();
          $next = $next.length ? $next : $cards.first();
          $next.addClass('card--next');
        }
      });
      if (!$current.length) {
        $current = $cards.last();
        $cards.first().trigger('click');
      }
      $this.addClass('cards--active');
    })

  };
  
  // Jquery and React don't go well together since both are working on DOM and React overshadows the DOM. So to make use of it we have to simply use useEffect hook and with this the jQuery function would be called on load
  useEffect(() => {
    $('.cards').commentCards();
  })


  return (
    <>
      <div id="projectSection">
        <motion.div className="sectionHeader"
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
        >
          <div class="wrapper">
            <div class="marquee">
              <p> Click on the Next Card. </p>
              <p> Click on the Next Card. </p>
              <p> Click on the Next Card. </p>
              <p> Click on the Next Card. </p>
              <p> Click on the Next Card. </p>
            </div>
          </div>
          <div className='downArrow'>
            <span><FaArrowCircleDown /></span>
          </div>
        </motion.div>
        <div id="projects">
          <motion.ul className="cards"
            variants={slideInFromLeft(-45, 0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {ProjectData.map((item) => (
              <ProjectCard key={item.title} {...item} />
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  )
}

export default Projects;
