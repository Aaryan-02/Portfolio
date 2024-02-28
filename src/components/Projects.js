import React, { useEffect } from 'react';
import $ from 'jquery';
import { ProjectData } from '../assets/data.js';

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
                <a className='visit' href={visitURL} target="_blank">Visit Project</a>
                {/* <Link className='iconLink' href="https://github.com/Aaryan-02"><FaGithub size={'2em'} /></Link> */}
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
        <div className="sectionHeader">
          <h2>Projects</h2>
        </div>
        <div id="projects">
          <ul className="cards" >
              {ProjectData.map((item) => (
                <ProjectCard key={item.title} {...item}/>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Projects;
