import React, { useRef, useEffect, useState } from 'react';
import PictureRow from './PictureRow';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div ref={experienceRef} className={`Experience ${isVisible ? 'visible' : ''}`}>
      <PictureRow />
    </div>
  );
};

export default Experience;
