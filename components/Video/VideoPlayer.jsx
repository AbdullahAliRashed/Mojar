// import React, { useEffect, useRef } from 'react';
// import videojs from 'video.js';
// // import 'video.js/dist/video-js.css';

// const VideoPlayer = ({ videoUrl, onTimeClick }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const player = videojs(videoRef.current, {
//       controls: true,
//       autoplay: false,
//       preload: 'auto',
//     });

//     return () => {
//       if (player) {
//         player.dispose();
//       }
//     };
//   }, []);

//   return (
//     <div data-vjs-player>
//       <video ref={videoRef} className="video-js" src={videoUrl}></video>
//     </div>
//   );
// };

// export default VideoPlayer;