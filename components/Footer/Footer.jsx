import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h3>Contact Us</h3>
          <form>
            <input type="email" name="email" placeholder="Your Email" />
            <textarea name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Your Company | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
