import React from 'react';
import './RecomPage.css';
import ring from '../../../assets/images/diamond.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const RecomPage = () => {
  const ringImageUrl = 'https://via.placeholder.com/300'; // Replace this with your actual image URL when available

  return (
    <div className="recom-page">
      <h1>Your Unique Identity</h1>
      <img src={ring} alt="Ring" />
      <h2>Exquisite Ring</h2>
      <p>20000 LE</p>
      <div>
        <button >Add to Cart</button>
        <button >Add to Wish List</button>
      </div>
    </div>
  );
};

export default RecomPage;
