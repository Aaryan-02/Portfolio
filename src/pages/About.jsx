import React from 'react';
import Timeline from '../components/Timeline.jsx';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/Animations.js';


const About = () => {

    return (
        <div id='about'>
            <div className="abtSections">
                <motion.div className="sectionHeader" variants={slideInFromTop(-45, 0.5)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                >
                    <h2>About</h2>
                </motion.div>
                <div className="abtLeft" >
                    <motion.p
                        variants={slideInFromLeft(-20, 0.5)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                    >
                        Dynamic and enthusiastic fresher with a strong foundation in software development, aiming to secure a position as a Developer. Eager to apply my programming skills and problem-solving abilities to develop efficient and reliable software solutions. Seeking an opportunity to learn from experienced professionals, contribute to the team's goals, and enhance my technical expertise in a progressive organization.
                    </motion.p>
                </div>
                <div className="abtRight" >
                    {/* <motion.div className="eduExp" variants={slideInFromRight(40, 0.5)} initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                    >
                        <h2>Education</h2>
                        <h2>Experience</h2>
                    </motion.div> */}
                    <Timeline />
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
            <motion.div className='projectsDone' variants={slideInFromLeft(-45, 0.7)} initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
            >
                <p className='number'>
                    +<span>30</span>
                </p>
                <span className='done'>Projects Done</span>
            </motion.div>
            <motion.div className="personal-info" variants={slideInFromLeft(-45, 0.8)} initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
            >
                <div className="row">
                    <div className="info-item">
                        <p>Age: <span>22</span></p>
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
            </motion.div>
        </div>
    )
}

export default About
