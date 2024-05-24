import React from 'react';

const ProductBox = ({ product }) => {
  return (
    <div className="product-box">
      <div className='image-container'>
        <img src={product.image} alt={product.name} className="product-image" />
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
