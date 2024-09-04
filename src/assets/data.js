// Project images
import chatApp from "./project-imgs/snappyChat.jpg";
import youtube from "./project-imgs/youtube.png";
import google from "./project-imgs/g.png";
import text from "./project-imgs/text.png";
import extension from "./project-imgs/extension.jpg";
import newsMonkey from "./project-imgs/news-monkey.png";

// Skill icons
import c from "../assets/tech-icons/icons8-c++-96.png";
import html from "../assets/tech-icons/icons8-html-5-96.png";
import css from "../assets/tech-icons/icons8-css3-96.png";
import js from "../assets/tech-icons/icons8-javascript-96.png";
import react from "../assets/tech-icons/icons8-react-native-96.png";
import mongodb from "../assets/tech-icons/icons8-mongodb-96.png";
import mysql from "../assets/tech-icons/icons8-mysql-logo-96.png";
import bootstrap from "../assets/tech-icons/icons8-bootstrap-96.png";
import sass from "../assets/tech-icons/icons8-sass-96.png";
import framer from "../assets/tech-icons/framer.png";

export const ProjectData = [
    {
        title: "Chat Application",
        description: "Snappy is a real-time chat application developed using the <b>MERN</b> stack, enabling instant messaging and communication between users. It facilitates seamless and interactive conversations in a user-friendly interface backed by a MongoDB database and powered by <b>ExpressJS</b> and <b>Node.js</b>.",
        imageSrc: chatApp,
        visitURL: "https://github.com/Aaryan-02/Chat-app"
    },
    {
        title: "YouTube Clone",
        description: "Developed a YouTube Clone using <b>ReactJS and YouTube API</b> that provides users with a familiar and intuitive interface similar to the popular video-sharing platform, YouTube. By integrating the YouTube API, the clone fetches and displays real-time data from YouTube's vast collection of videos.",
        imageSrc: youtube,
        visitURL: "https://aaryan-pinto-youtube-clone.netlify.app/"
    },
    {
        title: "Google Clone",
        description: "Developed a Google Clone using <b>ReactJS, Tailwind CSS and the Google API</b> that closely resembles the layout and design of the original Google search page. The clone is also responsive and adapts to different screen sizes, ensuring a seamless experience across devices.",
        imageSrc: google,
        visitURL: "https://aaryan-pinto-google-search-app.netlify.app/"
    },
    {
        title: "News Monkey",
        description: "Designed with <b>ReactJS</b>, the News Application features a modern and intuitive user interface that allows users to easily navigate and access news articles. Users can explore news articles across different categories such as business, technology, sports, and more.",
        imageSrc: newsMonkey,
        visitURL: "https://github.com/Aaryan-02/NewsMonkey"
    },
    {
        title: "Chrome Extension",
        description: "Developed a Social Media Blocker Chrome extension using <b>Manifest V3, HTML, CSS, and JavaScript</b> that offers users a solution to reduce distractions and improve <b>productivity</b> by blocking access to social media platforms.",
        imageSrc: extension,
        visitURL: "https://github.com/Aaryan-02/Social-Media-Blocker-Extension"
    },
    {
        title: "Text Utils",
        description: "Developed TextUtils Application using <b>ReactJS</b> that offers users a comprehensive set of tools and functionalities to analyze and manipulate text data efficiently. Functionalities include text case conversion, word count, character count, etc.",
        imageSrc: text,
        visitURL: "https://github.com/Aaryan-02/Text-Utils"
    },
];


export const skillData = [
    { name: 'C++', icon: c },
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: js },
    { name: 'ReactJS', icon: react },
    { name: 'MongoDB', icon: mongodb },
    { name: 'MySQL', icon: mysql },
    { name: 'BootStrap', icon: bootstrap },
    { name: 'SASS', icon: sass },
    { name: 'Framer', icon: framer },
];


export const aboutData = [
    {
        date: "2017 - 2018",
        title: "St. Patrick's School",
        course: "S.S.C."
    },
    {
        date: "25/02/2023 - 25/03/2023",
        title: "Cascode",
        course: "Web Development"
    },
    {
        date: "2019 - 2020",
        title: "St. Vincent's College",
        course: "H.S.C."
    },
    {
        date: "05/03/2023 - 05/04/2023",
        title: "SYNC Intern",
        course: "Software Development"
    },
    {
        date: "2021 - 2024",
        title: "SAE, Kondhawa",
        course: "BTECH in Computer Engineering"
    }
];
