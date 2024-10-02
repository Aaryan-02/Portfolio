import React from 'react';
import { aboutData } from '../assets/data.js';
import { motion } from 'framer-motion';
import { slideInFromRight } from '../utils/Animations.js';

const Timeline = () => {
    const educationData = aboutData.filter(item => item.type === "education");
    const experienceData = aboutData.filter(item => item.type === "experience");
    return (
        <motion.div id='timeline' variants={slideInFromRight(40, 0.5)} initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}>
            <div className="about-section-right">
                <div className="section education-section">
                    <h2>Education</h2>
                    {educationData.map((item, index) => (
                        <div key={index} className="card education-card">
                            <h3>{item.title}</h3>
                            <p className="course">{item.course}</p>
                            <p className="date">{item.date}</p> 
                        </div>
                    ))}
                </div>
                    
                <div className="section experience-section">
                    <h2>Experience</h2>
                    {experienceData.map((item, index) => (
                        <div key={index} className="card experience-card">
                            <h3>{item.title}</h3>
                            <p className="course">{item.course}</p>
                            <p className="date">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

const TimelineItem = ({ heading, text, course, index }) => (
    <div className={`timelineItem ${index === 1 ? "rightTimeline" : "leftTimeline"}`}>
        <div className="timelineItemBox">
            <h2 className='courseField'>{course}</h2>
            <p>{heading}</p>
            <p className='date'>{text}</p>
        </div>
    </div>
)

export default Timeline 
