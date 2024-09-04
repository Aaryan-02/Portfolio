import React, { useEffect, useState } from "react";

import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      {isMobile ? (
        <div className="mainContainer">
          <div className="container">
            <h1>This website is optimized for PC viewing</h1>
            <p>Please visit on a larger screen for the best experience.</p>
          </div>
        </div>
      ) : (
        <>
          <Menu />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
