import React, { useEffect, useState } from 'react';
import './PicSlide.css';
import leftImage from '../../assets/images/Image1Slide.jpeg';
import rightImage from '../../assets/images/Henriette - Large ring.jpeg';

const PicSlide = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);

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

    const handleVisibilityChange = () => {
      if (!isVisible) {
        setShowText(true); // If sliding animation is complete, show the text
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVisible]);

  return (
    <div className={`sliding-images-container ${isVisible ? 'visible' : ''}`}>
      <div className="image-container">
        <img className="image left-image" src={leftImage} alt="Left Image" />
      </div>
      <div className="image-container">
        <img className="image right-image" src={rightImage} alt="Right Image" />
      </div>
      {showText && ( // Render the text only when showText is true
        <div className="text-container">
          <h1 className="big-text">NEW COLLECTION</h1>
          <p className="shop-text">Shop Here</p>
        </div>
      )}
    </div>
  );
};

export default PicSlide;
