// import React, { useEffect } from 'react'

// const Cursor = () => {

//     useEffect(() => {
//         const circles = document.querySelectorAll('.circle');
//         const coords = {
//             x: 0,
//             y: 0,
//         };

//         const colors = ["#00ffff", "#00f4ff", "#00e7ff", "#00d8ff", "#00c8ff", "#45b5ff", "#80a1ff", "#a98aff", "#c671e2", "#da55bf", "#e43897", "#e31b6d"]

//         circles.forEach(function (circle, index) {
//             circle.x = 0;
//             circle.y = 0;
//             circle.style.backgroundColor = colors[index % colors.length];
//         });

//         // const bg = document.createElement('div');
//         // bg.classList.add('bg');
//         // document.body.appendChild(bg);

//         const animatedCircles = () => {
//             let x = coords.x;
//             let y = coords.y;

//             circles.forEach(function (circle, index) {
//                 circle.style.left = circle.x - 12 + "px";
//                 circle.style.top = circle.y - 12 + "px";

//                 circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

//                 circle.x = x;
//                 circle.y = y;

//                 const nextCircle = circles[index + 1] || circles[0];
//                 x += (nextCircle.x - x) * 0.3;
//                 y += (nextCircle.y - y) * 0.3;
//             });

//             // requestAnimationFrame(animatedCircles);
//         }

//         window.addEventListener('mousemove', (e) => {
//             coords.x = e.clientX;
//             coords.y = e.clientY;
//             animatedCircles();
//         });
//     }, [])

//     return (
//         <div>
//             {/* <div className="bg"></div> */}
//             <div className="cursor">
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//             </div>
//         </div>
//     )
// }

// export default Cursor
