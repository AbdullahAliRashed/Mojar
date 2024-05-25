import React from 'react';
import './WishList.css';

const WishList = () => {
  const products = [
    {
      name: "Gold Plated Necklace",
      type: "Necklace",
      price: "$99",
      image: "https://example.com/gold_necklace.jpg"
    },
    {
      name: "Diamond Stud Earrings",
      type: "Earrings",
      price: "$199",
      image: "https://example.com/diamond_earrings.jpg"
    },
    {
      name: "Silver Bracelet",
      type: "Bracelet",
      price: "$79",
      image: "https://example.com/silver_bracelet.jpg"
    }
  ];

  return (
    <div className="wishlist-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-type">Type: {product.type}</p>
            <p className="product-price">Price: {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WishList;
