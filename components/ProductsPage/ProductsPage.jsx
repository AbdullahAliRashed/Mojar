import React, { useState, useEffect } from 'react';
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
    }
  ]
  // useEffect(() => {
  //   // Fetch products from backend using Axios
  //   // Example: axios.get('/api/products').then(response => setProducts(response.data));
  //   // For testing, using hardcoded data
  //   const hardcodedProducts = [
  //     { id: 1, name: 'Necklace 1', type: 'Gold', price: '$100', image: image1 },
  //     { id: 2, name: 'Bracelet 1', type: 'Silver', price: '$50', image: image2 },
  //     { id: 3, name: 'Earrings 1', type: 'Diamond', price: '$200', image: image3 },
  //     { id: 4, name: 'Necklace 2', type: 'Gold', price: '$150', image: image1 },
  //     { id: 5, name: 'Bracelet 2', type: 'Silver', price: '$60', image: image2 },
  //     { id: 6, name: 'Earrings 2', type: 'Diamond', price: '$250', image: image3 },
  //     { id: 7, name: 'Necklace 3', type: 'Gold', price: '$120', image: image1 },
  //     { id: 8, name: 'Bracelet 3', type: 'Silver', price: '$70', image: image2 },
  //     { id: 9, name: 'Earrings 3', type: 'Diamond', price: '$220', image: image3 },
  //     { id: 10, name: 'Ring 1', type: 'Platinum', price: '$300', image: image4 },
  //   ];

    
  //   setProducts(hardcodedProducts);
  // }, []);

  return (
    <div className="jewelry-page">
      {/* <img src={carouselImage2} alt="Carousel Image 2" /> */}
      <div className="product-grid">
        {products.map(product => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
