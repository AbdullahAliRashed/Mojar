import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProductBox = ({ product }) => {

  const navigate = useNavigate();
  const handleNavigate = (chosenProduct) => {
    console.log(chosenProduct);

    navigate('/product', { product: {chosenProduct} });
  };
  return (
    <div onClick={()=>handleNavigate(product)}  className="product-box">
      <div className='image-container'>
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-box-details">
        <h3>{product.name}</h3>
        <div className='details-container'>
          <p>{product.description}</p>
          <p>{product.price} EGP</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
