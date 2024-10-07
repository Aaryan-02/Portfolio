import React, { useEffect, useState } from "react";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { pdfjs } from 'react-pdf';

import AnimatedCursor from "react-animated-cursor"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

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
      <AnimatedCursor
        innerSize={12}
        outerSize={50}
        color="255, 100, 150"
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        zIndex = "999999"
        innerStyle={{
          backgroundColor: 'rgb(255 158 185)',
          zIndex: "999999",
        }}
        outerStyle={{
          border: '3px solid rgb(255 158 185)',
          // backgroundColor: 'rgba(252 235 240)',
          zIndex: "999999",
          boxShadow: '0 0 15px rgba(255 158 185 0.2)',
        }}
      />
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
