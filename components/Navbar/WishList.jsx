import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import productImage from '../../assets/images/ringo.png'; // Replace with your actual product image path
import necklace2 from '../../assets/images/products/necklace2.webp';

const WishlistOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: ${props => (props.show ? 'block' : 'none')};
`;

const WishlistContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px; /* Adjust width as needed */
  height: 90%; /* Adjust height as needed */
  background: linear-gradient(to left, #E5BD7F, #F4DCBD);
  z-index: 1001;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1); /* Very thin border */
  border-radius: 12px;
  opacity: ${props => (props.show ? '1' : '0')}; /* Adjust opacity based on show prop */
  display: ${props => (props.show ? 'block' : 'none')}; /* Adjust display based on show prop */
  transition: opacity 0.5s ease, transform 0.3s ease; /* Smooth transition effect */
`;

const WishlistHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
`;

const WishlistBody = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    overflow-y: auto;
    height: 82%;
    /* Style the custom scrollbar */
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        border: 2px solid rgba(0, 0, 0, 0.1);
    }
`;

const WishlistFooter = styled.div`
  padding: 20px;
  border-top: 1px solid white;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
padding-top: 20px;
  width: 50px;
  height: 50px;
`;

const ProductDetails = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const ProductActions = styled.div`
  display: flex;
  align-items: center;
  margin-top:10px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  text-decoration: underline;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CartButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  text-decoration: underline;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SearchBar = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    width: calc(100% - 40px);
    border: none;
    border-radius: 5px;
    font-size: 16px;
`;


const Wishlist = ({ show, onClose }) => {
  const initialProducts = [
    {
      id: 1,
      name: 'Malony Collection 21K Gold Cardamom Cravate Necklace Grande',
      price: 5000,
      quantity: 1,
      image: necklace2,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');


  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
    <>
      <WishlistOverlay show={show} onClick={onClose} />
      <WishlistContainer show={show}>
        <WishlistHeader>
          <h2>Your Wishlist</h2>
          <FontAwesomeIcon icon={faTimes} onClick={onClose} style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = ''} />
        </WishlistHeader>
        <WishlistBody>
          {products.map(product => (
            <Product key={product.id}>
              <ProductImage src={product.image} alt="Product" />
              <ProductDetails>
                <h4>{product.name}</h4>
                <p>LE {product.price.toLocaleString()} EGP</p>
                <ProductActions>
                <CartButton onClick={() => addToCart(product.id)}>
                    <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
                    Add To Cart
                </CartButton>
                <RemoveButton onClick={() => removeProduct(product.id)}>Remove</RemoveButton>
                </ProductActions>
              </ProductDetails>
            </Product>
          ))}
        </WishlistBody>
      </WishlistContainer>
    </>
  );
};

export default Wishlist;
