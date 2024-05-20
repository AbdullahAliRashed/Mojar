import React, { useEffect, useState } from 'react';
import './ScrollNavbar.css'; 
import Logo from './Logo';
import SearchBar from './SearchBar';
import mojarLogo from '../../assets/images/mojar logo-01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const ScrollNavbar = () => {



  return (
    <nav className={`navbar`}>
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
          <a className="disabled" style={{cursor:'default'}}>JEWELRY</a>
          <div className='submenu-wrapper'>
          <ul className="submenu">
            <div className="submenu-title">CREATIONS</div>
            <li><a href="#">Necklaces</a></li>
            <li><a href="#">Bracelets</a></li>
            <li><a href="#">Rings</a></li>
            <li><a href="#">Earrings</a></li>
            <li><a href="#">Accessory</a></li>
          </ul>
          <ul className="submenu">
            <div className="submenu-title">COLLECTIONS</div>
            <li><a href="#">Celestial Sparkle</a></li>
            <li><a href="#">Midnight Serenade</a></li>
            <li><a href="#">Ocean's Embrace</a></li>
            <li><a href="#">Enchanted Garden</a></li>
            <li><a href="#">Vintage Glamour</a></li>
          </ul>
          <ul className="submenu">
            <div className="submenu-title">SELECTIONS</div>
            <li><a href="#">Gold</a></li>
            <li><a href="#">Silver</a></li>
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
        <a href="/cart">
          <FontAwesomeIcon icon={faShoppingBag} className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default ScrollNavbar;
