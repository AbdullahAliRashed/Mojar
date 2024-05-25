import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const ProductBox = ({ product, toggleWish, toggleCart }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = () => {
    navigate('/product');
  };


  // const navigateToWishlist = () => {
  //   navigate('/wishlist');
  // };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

      className="product-box"
    >
      <div className='image-container' onClick={handleNavigate}>
        <img src={product.image[0]} alt={product.name} className="product-image" />
        {isHovered && (
          <img
            src={product.image[1]} // Use product.image1 for the overlay image
            alt={product.name}
            className="overlay-image"
          />
        )}
      </div>
      <div className="product-box-details">
        <h3>{product.name}</h3>
        <div className='details-container'>
          <p>{product.description}</p>
          <p>{product.price} EGP</p>
          <div className='add-to-basket-container'>
            <p className='add-to-basket-text' onClick={toggleCart}>ADD TO BASKET</p>
            <FontAwesomeIcon onClick={toggleWish} icon={faHeart} className="favorite-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
