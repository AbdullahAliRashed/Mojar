import React, { useState, useEffect, useRef } from 'react';
import './ProductsPage.css';
import ProductBox from './ProductBox'; // Assuming you have a ProductBox component to display individual products
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpeg';
import carouselImage1 from '../../assets/images/Screenshot 2024-05-04 013725.png';
import carouselImage2 from '../../assets/images/Mojar2.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProductsPage = () => {
  // const [products, setProducts] = useState([]);
  const products = [
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
    },
    {
      "id": 9,
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
      "id": 10,
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
      "id": 11,
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
              <ProductBox key={product.id} product={product} />
            ))}
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductsPage;
