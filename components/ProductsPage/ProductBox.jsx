import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductBox = ({ product }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = (chosenProduct) => {
    console.log(chosenProduct);
    navigate('/product', { product: { chosenProduct } });
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleNavigate(product)}
      className="product-box"
    >
      <div className='image-container'>
        <img src={product.image} alt={product.name} className="product-image" />
        {isHovered && (
          <img
            src={product.image1} // Use product.image1 for the overlay image
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
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
