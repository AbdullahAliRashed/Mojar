import React, { useState, useEffect } from 'react';
import './Product.css'; // Import the CSS for styling
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons for slider
import ReactImageMagnify from 'react-image-magnify'
import necklace1 from '../../assets/images/products/necklace1.webp';
import necklace1model from '../../assets/images/products/necklace1-model.webp';
import necklace1alt from '../../assets/images/products/necklace1-alt.webp';
import necklace2 from '../../assets/images/products/necklace2.webp';
import necklace2model from '../../assets/images/products/necklace2-model.webp';
import necklace2alt from '../../assets/images/products/necklace2-alt.webp';

import necklace3 from '../../assets/images/products/necklace3.webp';
import necklace3model from '../../assets/images/products/necklace3-model.webp';
import necklace3alt from '../../assets/images/products/necklace3-alt.webp';

import necklace4 from '../../assets/images/products/necklace4.webp';
import necklace4model from '../../assets/images/products/necklace4-model.webp';
import necklace4alt from '../../assets/images/products/necklace4-alt.webp';

import necklace5 from '../../assets/images/products/necklace5.webp';
import necklace5model from '../../assets/images/products/necklace5-model.webp';
import necklace5alt from '../../assets/images/products/necklace5-alt.webp';

import necklace6 from '../../assets/images/products/necklace6.webp';
import necklace6model from '../../assets/images/products/necklace6-model.webp';
import necklace6alt from '../../assets/images/products/necklace6-alt.webp';

import necklace7 from '../../assets/images/products/necklace7.webp';
import necklace7model from '../../assets/images/products/necklace7-model.webp';
import necklace7alt from '../../assets/images/products/necklace7-alt.webp';

import necklace8 from '../../assets/images/products/necklace8.webp';
import necklace8model from '../../assets/images/products/necklace8-model.webp';
import necklace8alt from '../../assets/images/products/necklace8-alt.webp';
import ProductBox from '../ProductsPage/ProductBox';
import Customization from "../Customization/Customization";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import Wishlist from '../Navbar/WishList';
import SlideoutCart from '../Navbar/SlideoutCart';

const Product = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const toggleCart = () => setCartVisible(!cartVisible);
  const [wishVisible, setWishVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleWish = () => {
    setWishVisible(!wishVisible);
    // Close the cart when wishlist is toggled
    setCartVisible(false);
  };

  const product = {
    "id": 1,
    "name": "Circle Pendant",
    "shape": "ROUND",
    "color": "COLORLESS",
    "clarity": "FLAWLESS",
    "cut": "EXCELLENT TO GOOD",
    "carat": "2.50",
    "metal": "GOLD",
    "product_type": "BRACELET",
    "description": "Circle Pendant in gold",
    "price": "5000.00",
    "stock": 10,
    "image": [necklace1,necklace1alt,necklace1model],
    "collection": 1,
    "created_on": "2024-05-20T10:30:00Z",
    "updated_on": "2024-05-20T12:45:00Z"
  }


  const mayAlsoLikeProducts = [
    {
      "id": 2,
      "name": "Smile Bendant",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Smile Pendant in Yellow Gold, Small",
      "price": "5000.00",
      "stock": 10,
      "image": [necklace2,necklace2model,necklace2alt],
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 3,
      "name": "HardWear Medium Link",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "HardWear Medium Link Necklace in Yellow Gold",
      "price": "5000.00",
      "stock": 10,
      "image": [necklace3,necklace3model,necklace3alt],
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 4,
      "name": "Lock Pendant",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Lock Pendant in Yellow Gold with Diamonds, Medium",
      "price": "5000.00",
      "stock": 10,
      "image": [necklace4,necklace4model,necklace4alt],
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 5,
      "name": "Lock Pendant with diamonds",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Lock Pendant in Yellow Gold with Pavé Diamonds, Medium",
      "price": "5000.00",
      "stock": 10,
      "image": [necklace5,necklace5model,necklace5alt],
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 6,
      "name": "Knot Pendant",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Knot Pendant in Yellow Gold",
      "price": "5000.00",
      "stock": 10,
      "image": [necklace6,necklace6model,necklace6alt],
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 7,
      "name": "Open Heart Pendant",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Open Heart Pendant in Yellow Gold, 11 mm",
      "price": "5000.00",
      "stock": 10,
      "image": [necklace7,necklace7model,necklace7alt],
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
    {
      "id": 8,
      "name": "Mini Heart Tag Pendant",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Mini Heart Tag Pendant in Yellow Gold",
      "price": "5000.00",
      "stock": 10,
      "image": [necklace8,necklace8model,necklace8alt],
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    }
  ];
  const imagesArray = product.image;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();

  const navigateToWishlist = () => {
    navigate('/wishlist');
  };

  const smallImageWidth = windowWidth > 1024 ? 600 : (windowWidth === 768 ? 320 : (windowWidth > 768 ? 500 : windowWidth - 130));
  const smallImageHeight = windowWidth > 1024 ? 600 : (windowWidth === 768 ? 300 : (windowWidth > 768 ? 500 : (windowWidth - 130) * 1.075));
  const largeImageWidth = windowWidth > 1024 ? 1200 : (windowWidth > 768 ? 900 : windowWidth * 1.5);
  const largeImageHeight = windowWidth > 1024 ? 1290 : (windowWidth > 768 ? 1140 : (windowWidth * 1.5) * 1.075);

  const [isHovered, setIsHovered] = useState(false);
  return (
      product ? (
        <div className='product-page'>
        <div className="product">
          <div className="product-content">
            <div className='product-images-container'>
            <div className="product-images">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      src: imagesArray[currentImageIndex],
                      width: smallImageWidth,
                      height: smallImageHeight
                    },
                    largeImage: {
                      src: imagesArray[currentImageIndex],
                      width: largeImageWidth,
                      height: largeImageHeight
                    },
                    isHintEnabled: true,
                    enlargedImagePosition: 'over'
                  }}
                />
              </div>
              <div className={`slider ${isHovered ? "slider-disabled" : ""}`}>
                  {imagesArray.map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    />
                    ))}
                </div>
            </div>

            <div className="product-details">
              <div className='product-page-details-top-contaier'>
                <p className="product-title">{product.name}</p>
                <p className="product-description">{product.description}</p>
                <p className="product-description">{product.price} EGP</p>
              </div>
              <div className='add-to-basket-container'>
                    <p className='add-to-basket-text' onClick={toggleCart}>ADD TO BASKET</p>
                    <FontAwesomeIcon onClick={toggleWish} icon={faHeart} className="favorite-icon" />
                </div>
            </div>
          </div>
        </div>
        <div className={`you-may-also-like-container`}>
          <h1 className="product-title">YOU MAY ALSO LIKE</h1>
          <div className="may-also-like-product-grid">
            {mayAlsoLikeProducts.map(product => (
              <ProductBox toggleCart={toggleCart} toggleWish={toggleWish} key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Customization/>
        {wishVisible && <Wishlist show={wishVisible} onClose={toggleWish} />}
        <SlideoutCart show={cartVisible} onClose={toggleCart} />
      </div>
      ) : (
        <></>
      )
    
    
  );
};

export default Product;