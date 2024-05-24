import React, { useState } from 'react';
import './ScrollNavbar.css'; 
import SlideoutCart from './SlideoutCart';
import SearchBar from './SearchBar'; // Ensure you have this component
import mojarLogo from '../../assets/images/mojar logo-01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const ScrollNavbar = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => setCartVisible(!cartVisible);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <SearchBar />
        </div>
        <div className="navbar-center">
          <div className="logo-container">
            <img src={mojarLogo} alt="Mojar Logo" />
          </div>
          <div className="navbar-links">
            <ul>
              <li><a href="/">HOME</a></li>
              <li className="submenu-container">
                <a href="/Jewelry">JEWELRY</a>
                <div className="submenu-wrapper">
                  <ul className="submenu">
                    <li><a href="#">Beds</a></li>
                    <li><a href="#">Chairs</a></li>
                    <li><a href="#">Cabinets</a></li>
                    <li><a href="#">Desk & Table</a></li>
                    <li><a href="#">Bookcase</a></li>
                  </ul>
                  <ul className="submenu">
                    <li><a href="#">Necklaces</a></li>
                    <li><a href="#">Bracelets</a></li>
                    <li><a href="#">Rings</a></li>
                    <li><a href="#">Earrings</a></li>
                    <li><a href="#">Watches</a></li>
                  </ul>
                  <ul className="submenu">
                    <li><a href="#">Gold</a></li>
                    <li><a href="#">Silver</a></li>
                    <li><a href="#">Diamond</a></li>
                    <li><a href="#">Platinum</a></li>
                    <li><a href="#">Pearl</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="/products">PRODUCTS</a></li>
              <li><a href="/blog">BLOG</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-right">
          <a href="/wishlist">
            <FontAwesomeIcon icon={faHeart} className="icon" />
          </a>
          <button className="icon-button" onClick={toggleCart}>
            <FontAwesomeIcon icon={faShoppingBag} className="icon" />
          </button>
        </div>
      </nav>
      <SlideoutCart show={cartVisible} onClose={toggleCart} />
    </>
  );
};

export default ScrollNavbar;
