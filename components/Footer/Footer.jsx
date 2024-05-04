import React, { useRef, useEffect, useState } from 'react';
import './Footer.css'; // Import your CSS file for styling

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
        <div className={`footer-section about ${isVisibleAbout ? 'visible' : ''}`}>
        <h3 style={{ fontSize: '36px', fontWeight: 'bold' }}>MOJAR</h3>
        <div className='About-details'>
          <p>Description</p>
          <p>Work Times</p>
          <p>Location</p>
          <p>Number</p>
          <p>Email</p>
          </div>
        </div>
        <div className={`footer-section contact-form ${isVisibleContact ? 'visible' : ''}`}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'josefin' }}>Subscribe to Newsletter</h3>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="email" name="email" placeholder="Your Email" style={{ width: 'calc(100% - 40px)', padding: '15px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <button type="submit" className='Submit-footer' style={{width:'100px', backgroundColor: '#195E47', color: '#E5BD7F', border: 'none', padding: '15px 20px', cursor: 'pointer', borderRadius: '5px', marginTop: '10px' }}>Register</button>
        </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
