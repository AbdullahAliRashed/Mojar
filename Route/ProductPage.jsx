import React from 'react'
import Product from '../components/Product/Product'
import ring from '../assets/images/Henriette - Large ring.jpeg';
import image2 from '../assets/images/image3.jpeg';
import image3 from '../assets/images/image2.jpeg';
const ProductPage = () => {
  return (
    
      <Product images={[ring,image2,image3]} name={"Luxury Ring"} price={"15000 LE"} ringSizes={[1,2,3,4,5]} />
    
  )
}

export default ProductPage
