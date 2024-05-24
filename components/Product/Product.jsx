import React, { useState, useEffect } from 'react';
import './Product.css'; // Import the CSS for styling
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons for slider
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpeg';
import ProductBox from '../ProductsPage/ProductBox';
import Customization from "../Customization/Customization";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Product = ({ images, name, price ,ringSizes  }) => {
  const product = {
    "id": 1,
    "name": "Diamond Bracelet",
    "shape": "ROUND",
    "color": "COLORLESS",
    "clarity": "FLAWLESS",
    "cut": "EXCELLENT TO GOOD",
    "carat": "2.50",
    "metal": "GOLD",
    "product_type": "BRACELET",
    "description": "Beautiful diamond bracelet with round diamonds",
    "price": "5000.00",
    "stock": 10,
    "image": image1,
    "collection": 1,
    "created_on": "2024-05-20T10:30:00Z",
    "updated_on": "2024-05-20T12:45:00Z"
  }

  const similarProducts = [
    { id: 1, image: image1},
    { id: 2, image: image2},
    { id: 3, image: image3},
  ]

  const mayAlsoLikeProducts = [
    {
      "id": 1,
      "name": "Diamond Bracelet",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Beautiful diamond bracelet with round diamonds",
      "price": "5000.00",
      "stock": 10,
      "image": image1,
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 2,
      "name": "Diamond Bracelet",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Beautiful diamond bracelet with round diamonds",
      "price": "5000.00",
      "stock": 10,
      "image": image2,
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 3,
      "name": "Diamond Bracelet",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Beautiful diamond bracelet with round diamonds",
      "price": "5000.00",
      "stock": 10,
      "image": image4,
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 4,
      "name": "Diamond Bracelet",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Beautiful diamond bracelet with round diamonds",
      "price": "5000.00",
      "stock": 10,
      "image": image1,
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 5,
      "name": "Diamond Bracelet",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Beautiful diamond bracelet with round diamonds",
      "price": "5000.00",
      "stock": 10,
      "image": image2,
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 6,
      "name": "Diamond Bracelet",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Beautiful diamond bracelet with round diamonds",
      "price": "5000.00",
      "stock": 10,
      "image": image3,
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 7,
      "name": "Diamond Bracelet",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Beautiful diamond bracelet with round diamonds",
      "price": "5000.00",
      "stock": 10,
      "image": image4,
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 8,
      "name": "Diamond Bracelet",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Beautiful diamond bracelet with round diamonds",
      "price": "5000.00",
      "stock": 10,
      "image": image2,
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    }
  ];
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


  return (
    <div className='product-page'>
      <div className="product">
        <div className="product-content">
          <div className="product-images">
            <img
              src={product.image}
              alt={`${name} - Main Image`}
              className="product-image-main"
              />
            {/* <div className="slider">
              {imagesArray.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`${name} - Image ${index + 1}`}
                className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                onClick={()=> setCurrentImageIndex(index)}
                />
                ))}
            </div> */}
          </div>
          <div className="product-details">
            <div className='product-page-details-top-contaier'>
              <p className="product-title">{product.name}</p>
              <p className="product-description">{product.description}</p>
              <div className='add-to-basket-container'>
                  <p className='add-to-basket-text'>ADD TO BASKET</p>
                  <FontAwesomeIcon icon={faHeart} className="favorite-icon" />
              </div>
            </div>
            <div className='similar-container'>
              {similarProducts.map(product => (
                <div key={product.id} className='similar-products-image-container'>
                  <img src={product.image} className="similar-product-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`you-may-also-like-container`}>
        <h1 className="product-title">YOU MAY ALSO LIKE</h1>
        <div className="may-also-like-product-grid">
          {mayAlsoLikeProducts.map(product => (
            <ProductBox key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Customization/>
    </div>
  );
};

export default Product;
