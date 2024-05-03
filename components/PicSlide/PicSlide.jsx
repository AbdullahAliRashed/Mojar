import React, { useEffect, useState } from 'react';
import './PicSlide.css'; // Import your CSS file for styling
import leftImage from '.././Pics/Image1.jpeg'; // Import your left image
import rightImage from '.././Pics/Henriette - Large ring.jpeg'; // Import your right image
import rightImage1 from '.././Pics/MOJARM4.png'; // Import your right image

const PicSlide = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      const containerTop = document.querySelector('.sliding-images-container').getBoundingClientRect().top;
      const containerBottom = document.querySelector('.sliding-images-container').getBoundingClientRect().bottom;

      if (containerTop <= offset && containerBottom >= 0 && !isVisible) {
        setIsVisible(true);
      } else if ((containerTop > offset || containerBottom < 0) && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div className={`sliding-images-container ${isVisible ? 'visible' : ''}`}>
      <img className="image left-image" src={leftImage} alt="Left Image" />
      <img className="image right-image" src={rightImage} alt="Right Image" />
    </div>
  );
};

export default PicSlide;
