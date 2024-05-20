import React, { useRef, useEffect, useState } from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === footerRef.current) {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold: 0.5 } // Change this threshold as needed
    );

    observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">
        <div className={`footer-section about ${isVisible ? 'visible' : ''}`}>
          <h3>ABOUT US</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Where To Find Us</a></li>
            <li><a href="#">Frequently Asked Questions</a></li>
            <li><a href="#">Ring Size Guide</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className={`footer-section support ${isVisible ? 'visible' : ''}`}>
          <h3>SUPPORT</h3>
          <ul>
            <li><a href="#">Legal Information</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
        <div className={`footer-section contact ${isVisible ? 'visible' : ''}`}>
          <h3>CONTACT US</h3>
          <p>contact@Mojar.com</p>
          <p>+201023888544</p>
        </div>
        <div className={`footer-section subscribe ${isVisible ? 'visible' : ''}`}>
          <h3>SUBSCRIBE TO</h3>
          <span>NEWSLETTER</span>
          <form>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="custom-input"
              onFocus={(e) => e.target.placeholder = ''}
            />
            <button 
              type="submit" 
              className="submit-footer"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a>
          <a href="#" target="_blank" rel="noopenernoreferrer"><FaTwitter className="social-icon" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
        </div>
        &copy; {new Date().getFullYear()} Mojar | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
