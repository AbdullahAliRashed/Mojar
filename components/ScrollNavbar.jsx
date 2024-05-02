import React, { useEffect, useState } from 'react';
import './ScrollNavbar.css'; 

const ScrollNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change threshold as needed to determine when to show the navbar
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach and clean up event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only run the effect on mount and unmount

  return (
    <nav className={`navbar ${isScrolled ? 'visible' : 'hidden'}`}> {/* Apply the appropriate class based on the scroll state */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default ScrollNavbar;