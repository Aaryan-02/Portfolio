import React from 'react';
import data from "../assets/data.json";

const Timeline = () => {
    return (
        <div id='timeline'>
            <div className="timelineBox">
                {data.projects.map((item, index) => (
                    <TimelineItem heading={item.title} text={item.date} course={item.course} index={index} key={item.title} />
                ))}
            </div>
        </div>
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
