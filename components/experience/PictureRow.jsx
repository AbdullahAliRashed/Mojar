import React from 'react';
import './PictureRow.css';  // Import the updated CSS
import LazyImage from './LazyImage';
import image1 from '../../assets/images/image1.jpeg'
import image3 from '../../assets/images/image2.jpeg'
import image2 from '../../assets/images/image3.jpeg'
import image4 from '../../assets/images/image4.jpeg'

const PictureRow = () => {
  return (
    <div className="picture-row">
      <div className='pictureContainer'>
        <p className='overlay-text text'>Modern Yet Timeless</p>
        <div className="text-container1 text-container">
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Rings</p>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Shop Now</p>
        </div>
        <LazyImage
          key={1}
          src={image1}
          alt="Rings"
          className="picture"
        />
      </div>
      
      <div className='pictureContainer'>
        <p className='overlay-text2 text'>Poetic</p>
        <div className="text-container2 text-container">
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Bracelets</p>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Shop Now</p>
        </div>
        <LazyImage
          key={2}
          src={image2}
          alt="Bracelets"
          className="picture"
        />
      </div>
      
      <div className='pictureContainer'>
        <p className='overlay-text3 text'>Powerful</p>
        <div className="text-container3 text-container">
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Pendants</p>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Shop Now</p>
        </div>
        <LazyImage
          key={3}
          src={image3}
          alt="Pendants"
          className="picture"
        />
      </div>
      
      <div className='pictureContainer'>
        <p className='overlay-text4 text'>Opulent and Luxurious</p>
        <div className="text-container4 text-container">
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Necklaces</p>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Shop Now</p>
        </div>
        <LazyImage
          key={4}
          src={image4}
          alt="Necklaces"
          className="picture"
        />
      </div>
    </div>
  );
};

export default PictureRow;
