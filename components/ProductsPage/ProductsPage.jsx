import React, { useState, useEffect, useRef } from 'react';
import './ProductsPage.css';
import ProductBox from './ProductBox'; // Assuming you have a ProductBox component to display individual products
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

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Wishlist from '../Navbar/WishList';
import SlideoutCart from '../Navbar/SlideoutCart';
const ProductsPage = () => {
  // const [products, setProducts] = useState([]);
  const products = [
    {
      "id": 1,
      "name": "Circle Bendant",
      "shape": "ROUND",
      "color": "COLORLESS",
      "clarity": "FLAWLESS",
      "cut": "EXCELLENT TO GOOD",
      "carat": "2.50",
      "metal": "GOLD",
      "product_type": "BRACELET",
      "description": "Circle Pendant in Yellow Gold, Small",
      "price": "5000.00",
      "stock": 10,
      "image": [necklace1,necklace1model,necklace1alt],
      "collection": 1,
      "created_on": "2024-05-20T10:30:00Z",
      "updated_on": "2024-05-20T12:45:00Z"
    },
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
  ]
  const rowRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('fade-out');
        } else {
          entry.target.classList.remove('fade-in');
          entry.target.classList.add('fade-out');
        }
      });
    }, options);

    rowRefs.current.forEach(row => {
      if (row) observer.observe(row);
    });

    return () => {
      if (rowRefs.current) {
        rowRefs.current.forEach(row => {
          if (row) observer.unobserve(row);
        });
      }
    };
  }, []);

  const getProductRows = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
      rows.push(products.slice(i, i + 3));
    }
    return rows;
  };

  const [cartVisible, setCartVisible] = useState(false);
  const toggleCart = () => setCartVisible(!cartVisible);
  const [wishVisible, setWishVisible] = useState(false);

  const toggleWish = () => {
    setWishVisible(!wishVisible);
    // Close the cart when wishlist is toggled
    setCartVisible(false);
  };

  return (
    <div className="jewelry-page">
      {/* <img src={carouselImage2} alt="Carousel Image 2" /> */}
      <div className="product-grid">
        {/* {products.map(product => (
          <ProductBox key={product.id} product={product} />
        ))} */}

        {getProductRows().map((row, index) => (
          <div key={index} className="product-row fade-out" ref={el => (rowRefs.current[index] = el)}>
            {row.map(product => (
              <ProductBox toggleWish={toggleWish} toggleCart={toggleCart} key={product.id} product={product} />
            ))}
          </div>
        ))}

      </div>
      {wishVisible && <Wishlist show={wishVisible} onClose={toggleWish} />}
        <SlideoutCart show={cartVisible} onClose={toggleCart} />
    </div>
  );
};

export default ProductsPage;