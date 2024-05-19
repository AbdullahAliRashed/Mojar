import React, { useState, useEffect } from 'react';
import './Product.css'; // Import the CSS for styling
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons for slider

const Product = ({ images, name, price ,ringSizes  }) => {
  // Ensure that images is always an array
  const imagesArray = Array.isArray(images) ? images : [images];

  // State to track the index of the current main image in the slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRingSize, setSelectedRingSize] = useState(null);
  // Function to handle click on the slider arrows
  const handleSliderArrowClick = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1));
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1));
    }
  };

  // Function to automatically switch images after a certain time interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [imagesArray.length]); // Run the effect whenever the length of imagesArray changes

  return (
    <div className="product">
      <div className="product-content">
        <div className="product-images">
          <img
            src={imagesArray[currentImageIndex]}
            alt={`${name} - Main Image`}
            className="product-image-main"
          />
          <div className="slider">
            {imagesArray.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name} - Image ${index + 1}`}
                className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
            <div className="slider-arrows">
              <button onClick={() => handleSliderArrowClick('prev')} className="slider-arrow">
                <FaChevronLeft />
              </button>
              <button onClick={() => handleSliderArrowClick('next')} className="slider-arrow">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="product-details">
          <h1 className="product-title">{name}</h1>
          <p className="product-price">{price}</p>
          <div className="ring-size">
        <p className="ring-size-label">Ring Size:</p>
        <div className="ring-size-options">
          {ringSizes.map((size, index) => (
            <button
              key={index}
              className={`ring-size-option ${selectedRingSize === size ? 'selected' : ''}`}
              onClick={() => setSelectedRingSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
