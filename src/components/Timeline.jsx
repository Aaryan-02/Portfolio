import React from 'react';
import { aboutData } from '../assets/data.js';
import { motion } from 'framer-motion';
import { slideInFromRight } from '../utils/Animations.js';

const Timeline = () => {
    return (
        <motion.div id='timeline' variants={slideInFromRight(40, 0.8)} initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}>
            <div className="timelineBox">
                {aboutData.map((item, index) => (
                    <TimelineItem heading={item.title} text={item.date} course={item.course} index={index} key={item.title} />
                ))}
            </div>
        </motion.div>
    )
}

const TimelineItem = ({ heading, text, course, index }) => (
    <div className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"}`}>
        <div className="timelineItemBox">
            <h2 className='courseField'>{course}</h2>
            <p>{heading}</p>
            <p className='date'>{text}</p>
        </div>
    </div>
)

export default Timeline 
