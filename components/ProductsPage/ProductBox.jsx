import React from 'react';

const ProductBox = ({ product }) => {
  return (
    <div className="product-box">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>Type: {product.type}</p>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
};

export default ProductBox;
