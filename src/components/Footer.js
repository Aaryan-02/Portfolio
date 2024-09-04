import React from 'react';
import { FaArrowRight, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideInFromBottom } from './Animations.js';


const Footer = () => {

    const list = [0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167, 205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210, 211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132, 133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218, 259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259, 260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141, 144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306, 24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230, 270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275, 316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116, 156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78, 79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282, 283, 284, 285, 323, 324, 325, 326,
    ];

    const array = new Array(365).fill().map((_, index) => index);

    return (
        <div id="footerBackground">
            <div id="footer">
                <div className="logo">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 210" className='sidebar__logo'
                            style={{ backgroundColor: 'transparent' }}>
                            <path fill="#e31b6d" d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194L171 209.194Z" />
                            <path d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
                                fill='cyan' />
                        </svg>
                    </Link>
                </div>
                <motion.div variants={slideInFromBottom(30, 0.5)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                >
                    <h1 className="quote">"Living, learning & levelling up one day at a time."</h1>
                    <h2 className="githubTitle">Want to get in touch with me?</h2>
                </motion.div>
                <motion.div className="githubChart" variants={slideInFromBottom(30, 0.5)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                >
                    <div className="dates">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                        <span>Aug</span>
                        <span>Sep</span>
                        <span>Oct</span>
                        <span>Nov</span>
                        <span>Dec</span>
                    </div>
                    <div className="boxContainer">
                        {array.map((index) =>
                            <div className={list.includes(index) ? "box active" : "box"} key={index}></div>
                        )}
                    </div>
                </motion.div>
                <motion.article variants={slideInFromBottom(30, 0.5)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                >
                    <span className="on">ON</span>
                    <div className="social-icons">
                        <span className='social-icon'><FaArrowRight /></span>
                        <a href="https://github.com/Aaryan-02" target="_blank" className="social-icon"><FaGithub className="fab" /></a>
                        <a href="https://www.linkedin.com/in/aaryan-pinto/" target="_blank" className="social-icon"><FaLinkedinIn className="fab" /></a>
                        <a href="https://www.instagram.com/aryan_p_02/" target="_blank" className="social-icon"><FaInstagram className="fab" /></a>
                    </div>
                </motion.article>
                <motion.div className="copyright" variants={slideInFromBottom(30, 0.4)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                >
                    <p>Copyright &copy; 2023 Aaryan Pinto</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Footer

