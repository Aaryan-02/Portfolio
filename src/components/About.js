import React, { useEffect, useRef } from 'react';
import { animate, motion } from "framer-motion";
import Timeline from './Timeline';
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    const projectCount = useRef(0);

    // // var element = projectCount.current;

    // const animationProjectsCount = () => {
    //     animate(0, 30, {
    //         duration: 1,
    //         onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
    //     })
    //     console.log(projectCount.current)
    // }

    useEffect(()=>{
        Aos.init({duration: 2000, once: true})
    }, []);

    return (
        <div id='about'>
            <div className="abtSections">
                <div className="sectionHeader" data-aos="zoom-in" data-offset='80'>
                    <h2>About</h2>
                </div>
                <div className="abtLeft" data-aos="zoom-in-right">
                    <p>Dynamic and enthusiastic fresher with a strong foundation in software development, aiming to secure a position as a Developer. Eager to apply my programming skills and problem-solving abilities to develop efficient and reliable software solutions. Seeking an opportunity to learn from experienced professionals, contribute to the team's goals, and enhance my technical expertise in a progressive organization.</p>
                </div>
                <div className="abtRight" data-aos="zoom-in-left">
                    <div className="eduExp">
                        <h2>Education</h2>
                        <h2>Experience</h2>
                    </div>
                    <Timeline />
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
            <div className='projectsDone' data-aos="fade-up">
                <p className='number'>
                    +<span>30</span>
                </p>
                <span className='done'>Projects Done</span>
            </div>
            <div className="personal-info" data-aos="fade-up">
                <div className="row">
                    <div className="info-item">
                        <p>Age: <span>20</span></p>
                    </div>
                    <div className="info-item">
                        <p>City: <span> Pune</span></p>
                    </div>
                </div>
                <div className="row">
                    <div className="info-item">
                        <p>Phone: <span> +91 9359296901</span></p>
                    </div>
                    <div className="info-item">
                        <p>Email: <span> imaryan32@gmail.com</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
