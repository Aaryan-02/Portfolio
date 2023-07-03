import React, { useEffect } from 'react';
import $ from 'jquery';
import chatApp from "../assets/snappyChat.jpg";
import youtube from "../assets/youtube.png"
import google from "../assets/g.png";
import text from "../assets/text.png";
import extension from "../assets/extension.jpg";
import newsMonkey from "../assets/news-monkey.png";
import { FaGithub } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true});
  }, []);

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
        <div className="sectionHeader" data-aos="zoom-out" data-aos-once='true'>
          <h2>Projects</h2>
        </div>
        <div id="projects">
          <ul className="cards" data-aos="zoom-in-up" data-aos-once='true'>
            <li className="card">
              <section>
                <article>
                  <div className="workitem">
                    <img src={chatApp} alt="chatApp" />
                    <aside>
                      <h3 className="projectTitle">Chat Application</h3>
                      <p>Snappy is a real-time chat application developed using the <b>MERN</b> stack, enabling instant messaging and communication between users. It facilitates seamless and interactive conversations in a user-friendly interface backed by a MongoDB database and powered by <b>ExpressJS</b> and <b>Node.js</b>.</p>
                      <div className='proLinks'>
                        <a className='visit' href="https://chat-app-public-puce.vercel.app/" target="_blank">Visit Project</a>
                        {/* <Link className='iconLink' href="https://github.com/Aaryan-02"><FaGithub size={'2em'} /></Link> */}
                      </div>
                    </aside>
                  </div>
                </article>
              </section>
            </li>
            <li className="card">
              <section>
                <article>
                  <div className="workitem">
                    <img src={youtube} alt="youtube" />
                    <aside>
                      <h3 className="projectTitle">YouTube Clone</h3>
                      <p>Developed a YouTube Clone using <b>ReactJS and YouTube API</b> that provides users with a familiar and intuitive interface similar to the popular video-sharing platform, YouTube. By integrating the YouTube API, the clone fetches and displays real-time data from YouTube's vast collection of videos.</p>
                      <div className='proLinks'>
                        <a className='visit' href="https://aaryan-pinto-youtube-clone.netlify.app/" target="_blank">Visit Project</a>
                        {/* <Link className='iconLink' href="https://github.com/Aaryan-02"><FaGithub size={'2em'} /></Link> */}
                      </div>
                    </aside>
                  </div>
                </article>
              </section>
            </li>

            <li className="card">
              <section>
                <article>
                  <div className="workitem">
                    <img src={google} alt="google" />
                    <aside>
                      <h3 className="projectTitle">Google Clone</h3>
                      <p>Developed a Google Clone using <b>ReactJS, Tailwind CSS and the Google API</b> that closely resembles the layout and design of the original Google search page. The clone is also responsive and adapts to different screen sizes, ensuring a seamless experience across devices.</p>
                      <div className='proLinks'>
                        <a className='visit' href="https://aaryan-pinto-google-search-app.netlify.app/" target="_blank">Visit Project</a>
                        {/* <Link className='iconLink' href="https://github.com/Aaryan-02"><FaGithub size={'2em'} /></Link> */}
                      </div>
                    </aside>
                  </div>
                </article>
              </section>
            </li>
            <li className="card">
              <section>
                <article>
                  <div className="workitem">
                    <img src={newsMonkey} alt="newsmonkey" />
                    <aside>
                      <h3 className="projectTitle">News Monkey</h3>
                      <p>Designed with <b>ReactJS</b>, the News Application features a modern and intuitive user interface that allows users to easily navigate and access news articles. Users can explore news articles across different categories such as business, technology, sports, and more.</p>
                      <div className='proLinks'>
                        <a className='visit' href="https://github.com/Aaryan-02/NewsMonkey" target="_blank">Visit Project</a>
                        {/* <Link className='iconLink' href="https://github.com/Aaryan-02"><FaGithub size={'2em'} /></Link> */}
                      </div>
                    </aside>
                  </div>
                </article>
              </section>
            </li>
            <li className="card">
              <section>
                <article>
                  <div className="workitem">
                    <img src={extension} alt="extension" />
                    <aside>
                      <h3 className="projectTitle">Chrome Extension</h3>
                      <p>Developed a Social Media Blocker Chrome extension using <b>Manifest V3, HTML, CSS, and JavaScript</b> that offers users a solution to reduce distractions and improve <b>productivity</b> by blocking access to social media platforms.</p>
                      <div className='proLinks'>
                        <a className='visit' href="https://github.com/Aaryan-02/Social-Media-Blocker-Extension" target="_blank">Visit Project</a>
                        {/* <Link className='iconLink' href="https://github.com/Aaryan-02"><FaGithub size={'2em'} /></Link> */}
                      </div>
                    </aside>
                  </div>
                </article>
              </section>
            </li>
            <li className="card">
              <section>
                <article>
                  <div className="workitem">
                    <img src={text} alt="textutils" />
                    <aside>
                      <h3 className="projectTitle">Text Utils </h3>
                      <p>Developed TextUtils Application using <b>ReactJS</b> that offers users a comprehensive set of tools and functionalities to analyze and manipulate text data efficiently. Functionalities include text case conversion, word count, character count, etc.</p>
                      <div className='proLinks'>
                        <a className='visit' href="https://github.com/Aaryan-02/Text-Utils" target="_blank">Visit Project</a>
                        {/* <Link className='iconLink' href="https://github.com/Aaryan-02"><FaGithub size={'2em'} /></Link> */}
                      </div>
                    </aside>
                  </div>
                </article>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Projects
