import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose
} from "../utils/Animations.js";


//taken state of header as prop 
const Hamburger = ({ state }) => {
  // useRef hook is used to reference a value of the DOM element which returns current object
  // useRef is used to access DOM nodes
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);

  // useEffect hooks are used to perform side-effects
  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      // duration of menu is set to 1 and is set greater than above animation effect duration to allow animation Effect to finish
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)  //state.initial=null means has been clicked before
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      staggerText(line1, line2, line3, line4, line5);
    }
  }, [state]);
  //This is a dependency array and it consists of all the values that our side-effect relies upon. What this array will do is check and see if its values(in this case values of state) has been changed between renders. If so, it will execute useEffect function again
  
  for (const link of document.getElementsByClassName("link")) {
    link.onmousemove = e => {
      const decimal = e.clientX / link.offsetWidth;

      const basePercent = 80,
        percentRange = 20,
        adjustablePercent = percentRange * decimal;

      const lightBluePercent = basePercent + adjustablePercent;

      link.style.setProperty("--light-blue-percent", `${lightBluePercent}%`);
    }
  }

  return (
    // All of the below nodes are DOM nodes
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      className="link"
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/skills'>
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line4 = el)}
                      to='/projects'>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line5 = el)}
                      to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
