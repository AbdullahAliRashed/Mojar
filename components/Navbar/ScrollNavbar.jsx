import React, { useEffect, useState } from 'react';
import './ScrollNavbar.css'; 
import Logo from './Logo';
import DropdownMenu from './DropdownMenu';
import SearchBar from './SearchBar';



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
    // <nav className={`navbar ${isScrolled ? 'visible' : 'hidden'}`}>
    <nav className={`navbar`}> 
       <div className="navbar-left">
       <Logo />
       <div className="navbar-links">
      <a href="/">HOME</a>
      <a href="/collections">COLLECTIONS</a>
      <a href="/products">PRODUCTS</a>
      <a href="/blog">BLOG</a>
    </div>
      </div>
      
      
      <div className="navbar-right">
        <SearchBar />  
      </div>
    </nav>
  );
};

export default ScrollNavbar;