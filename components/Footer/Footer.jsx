import React, { useRef, useEffect, useState } from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  const footerRef = useRef(null);
  const [isVisibleAbout, setIsVisibleAbout] = useState(false);
  const [isVisibleContact, setIsVisibleContact] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === footerRef.current) {
            if (entry.isIntersecting) {
              setIsVisibleAbout(true);
              setIsVisibleContact(true);
            } else {
              setIsVisibleAbout(false);
              setIsVisibleContact(false);
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
        <div className={`footer-section contact-form ${isVisibleContact ? 'visible' : ''}`}>
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'josefin' }}>SUBSCRIBE TO</h3>
            <span style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'josefin', marginBottom: '10px' }}>NEWSLETTER</span>
          </div>
  
          <form style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="inputField"
            />
            <button 
              type="submit" 
              className='Submit-footer' 
              style={{ 
                width: '100px', 
                backgroundColor: '#195E47', 
                color: '#E5BD7F', 
                padding: '15px 20px', 
                cursor: 'pointer', 
                borderRadius: '5px', 
                marginTop: '10px' 
              }}>Register
            </button>
          </form>
        </div>
        <div className={`footer-section about ${isVisibleAbout ? 'visible' : ''}`}>
          <h3 style={{ fontSize: '36px', fontWeight: 'bold' }}>MOJAR</h3>
          <div className='About-details'>
            <div className="about-subsection">
              <p>Discover the joy of self-expression and timeless beauty with us</p>
            </div>
            <div className="about-subsection">
              <h4>Service Hours:</h4>
              <p>Open for you service from 8 AM to 8 PM</p>
            </div>
            <div className="about-subsection">
              <h4>Contact Details:</h4>
              <p>El Rehab city, El Rehab Mall 2, Second Floor, Shop Nr. 153</p>
              <p>+0201010054097</p>
              <p>Mojarjewelry@Mojar.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company | All rights reserved
      </div>
      <div className="social-icons">
      <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: '#e5bd7f',fontSize: '24px' }} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ color: '#e5bd7f' ,fontSize: '24px'}} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: '#e5bd7f',fontSize: '24px' }} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: '#e5bd7f',fontSize: '24px' }} /></a> 
      </div>
    </footer>
  );
};

export default Footer;