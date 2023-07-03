import React, {lazy, Suspense} from "react";

import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";



// import Timeline from "./components/Timeline";

function App() {
  return (
    <BrowserRouter>
          <Menu />
          <Routes >
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/skills" element={<Skills />}/>
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          {/* <Timeline /> */}
          {/* <About /> */}
    </BrowserRouter>
  );
}

export default App;
