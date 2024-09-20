import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger2 from "./Hamburger";
import { Sling as Hamburger } from 'hamburger-react';
import { motion } from "framer-motion";
import { slideInFromTop } from "../utils/Animations";

const Header = () => {
  // State of our Menu
  // initial - At the start when the page is first loaded the menu is not initially already displayed
  // clicked  - initally the hamburger menu is also not already clicked and it is null and not true or false because we were not even given the option to click it at the start and when it is clicked it is true
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: false
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);
  // useLocation hook is used to make the transitions from one react component location to another according to the changes in page
  const location = useLocation();

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    setState({ clicked: false, menuName: false });
  }, [location]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    // This if statement purpose is only when the app is first opened 
    // and when the menu btn is clicked for the first time then the initial=null for the first btn click
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: true
      });
      //once the menu button is toggled the below else-if statement cases will just go back and forth
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: false
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: true
      });
    }
  };

  //Determine if out menu button should be disabled
  // The disable button is to avoid continuous clicks on the menu button which will hamper the user experience
  // So whenever button is clicked it will be disabled for 1.2sec to improve user experience
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <motion.header variants={slideInFromTop(-100, 0.5)} initial="initial" animate="animate">
      <div className="inner-header" >
        <div className="logo">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 210" className='sidebar__logo'>
              <path fill="#e31b6d" d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194L171 209.194Z" />
              <path d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
                fill='cyan' />
            </svg>
          </Link>
        </div>
        <div className="menu">
          <button disabled={disabled} onClick={handleMenu}>
            <Hamburger toggled={state.menuName} toggle={setState.menuName} />
          </button>
        </div>
      </div>
      {/* State passed as prop which will allow use to use state of Header in Hamburger */}
      <Hamburger2 state={state} />
    </motion.header>
  );
};

export default Header;
