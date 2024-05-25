import React, { useEffect, useState } from 'react';
import './Customization.css'; // Import your CSS file for styling
import rightImage1 from '../../assets/images/MOJARM4.png'; // Import your right image


const Customization = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      const containerTop = document.querySelector('.customization-container').getBoundingClientRect().top;
      const containerBottom = document.querySelector('.customization-container').getBoundingClientRect().bottom;

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
    <div className={`customization-container ${isVisible ? 'visible' : ''}`}>
      <div className="title">Customization</div>
      <div className="description">At Mojar, we believe that Personalized crafts are our way of expressing your individual style.
       Our experienced artisans collaborate directly with you to fulfil your goals, supporting you at every stage of the design process.
       We guarantee that every custom piece embodies your personal style and becomes a cherished family heirloom,
       thanks to our meticulous attention to detail and top-notch craftsmanship.</div>
      <img className="right-image1" src={rightImage1} alt="RightImage" />
      <button className="custom-button" onClick={() => window.location.href='/customize'}>CUSTOMIZE</button>
    </div>
  );
};

export default Customization;