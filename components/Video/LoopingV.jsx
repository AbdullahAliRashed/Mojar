import React from 'react';
import './LoopingV.css'; // Optional: For styling

const LoopingV = () => {
  return (
    <div className='vidContainer'>

    <video
      className="LoopingV"
      src="../../assets/videos/mojar graded.mp4" // Path to your video
      autoPlay
      loop
      muted
      playsInline // Helpful for mobile devices
      />
      
      </div>
  );
};
export default LoopingV;