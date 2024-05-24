import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import productImage from '../../assets/images/ringo.png'; // Replace with your actual product image path

const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: linear-gradient(to left, #E5BD7F, #F4DCBD);
  z-index: 1001;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
`;

const CartHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
`;

const CartBody = styled.div`
  padding: 20px;
  overflow-y: auto;
  flex: 1;
`;

const CartFooter = styled.div`
  padding: 20px;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
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
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin: 0 10px;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  text-decoration: underline;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #195E47;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
`;

const SlideoutCart = ({ show, onClose }) => {
  const initialProducts = [
    {
      id: 1,
      name: 'Noccioline Collection 21K Gold Cardamom Cravate Necklace Grande',
      price: 656000,
      quantity: 1,
      image: productImage,
    },
    {
      id: 2,
      name: 'Noccioline Collection 21K Gold Cardamom Cravate Necklace Grande',
      price: 656000,
      quantity: 1,
      image: productImage,
    },
    {
      id: 3,
      name: 'Noccioline Collection 21K Gold Cardamom Cravate Necklace Grande',
      price: 656000,
      quantity: 1,
      image: productImage,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const incrementQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const decrementQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: Math.max(1, product.quantity - 1) } : product
    ));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleCheckout = () => {
    // Handle the checkout process here, e.g., redirect to the checkout page
    console.log("Proceed to checkout");
  };

  const calculateSubtotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <>
      <CartOverlay show={show} onClick={onClose} />
      <CartContainer show={show}>
        <CartHeader>
          <h2>Your Cart</h2>
          <FontAwesomeIcon icon={faChevronRight} onClick={onClose} />
        </CartHeader>
        <CartBody>
          {products.map(product => (
            <Product key={product.id}>
              <ProductImage src={product.image} alt="Product" />
              <ProductDetails>
                <h4>{product.name}</h4>
                <p>LE {product.price.toLocaleString()} EGP</p>
                <ProductActions>
                  <Button onClick={() => decrementQuantity(product.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                  <span>{product.quantity}</span>
                  <Button onClick={() => incrementQuantity(product.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                  <RemoveButton onClick={() => removeProduct(product.id)}>Remove</RemoveButton>
                </ProductActions>
              </ProductDetails>
            </Product>
          ))}
        </CartBody>
        <CartFooter>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Subtotal</p>
            <p>LE {calculateSubtotal().toLocaleString()} EGP</p>
          </div>
          <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        </CartFooter>
      </CartContainer>
    </>
  );
};

export default SlideoutCart;
