// import React from 'react';
// import VideoPlayer from './VideoPlayer';
// import './VideoOverlay.css'; // Custom CSS for overlays

// const VideoOverlay = () => {
//   const handleTimeClick = (time) => {
//     // Handle time click, e.g., by seeking to a specific time in the video
//     console.log(`Clicked on time: ${time}`);
//   };

//   return (
//     <div className="video-overlay-container">
//       <VideoPlayer
//         videoUrl="../../assets/videos/jwl.mp4"
//         onTimeClick={handleTimeClick}
//       />
//       <div className="overlay-container">
//         <div
//           className="overlay clickable"
//           style={{ left: '25%' }}
//           onClick={() => handleTimeClick(0)}
//         >
//           Jump to 10s
//         </div>
//         <div
//           className="overlay clickable"
//           style={{ left: '50%' }}
//           onClick={() => handleTimeClick(4)}
//         >
//           Jump to 20s
//         </div>
//         <div
//           className="overlay clickable"
//           style={{ left: '75%' }}
//           onClick={() => handleTimeClick(8)}
//         >
//           Jump to 30s
//         </div>
//         <div
//           className="overlay clickable"
//           style={{ right: '25%' }}
//           onClick={() => handleTimeClick(12)}
//         >
//           Jump to 40s
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoOverlay;