import React, { useEffect, useState, useRef } from 'react';  // Corrected import statement
import './PictureRow'
const LazyImage = ({ src, alt, placeholder }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);  // Load the image when it's in view
          observer.unobserve(imageRef.current);  // Stop observing after loading
        }
      },
      { threshold: 0.5 }  // Trigger when 10% of the image is in view
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);  // Start observing
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);  // Clean up observer on unmount
      }
    };
  }, []);  // Run once on mount

  return (

   
    <img className='picture'
      ref={imageRef}
      src={isLoaded ? src : placeholder}  // Load actual image or placeholder
      alt={alt}  // Alternative text for accessibility
      
    />
    
    
  );
};

export default LazyImage;
