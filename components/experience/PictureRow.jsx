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
        <div className="text-container1" style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)' ,marginTop:'150px'}}>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Rings</p>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Shop Now</p>
        </div>
        {/* <button className='butt'>Shop Now</button> */}
       
          <LazyImage
            key={1}
            src={image1}  // Source of the image
            alt={image1 }  // Alternative text
            className="picture"
            />
            </div> 
          
      
         
         <div className='pictureContainer'>
         <p className='overlay-text2 text'>Poetic</p>
         <div className="text-container1" style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)' ,marginTop:'150px'}}>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Braclets</p>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Shop Now</p>
        </div>
         {/* <div className="text-container2">
          <p className='overlay-text text'>Braclets</p>
          <br />
          <p className='overlay-text text'>Shop Now</p>
        </div> */}
         {/* <button className='butt'>Shop Now</button> */}

        <LazyImage
            key={2}
            src={image2}  // Source of the image
            alt={image2 }  // Alternative text
            className="picture"
            />
          
      
            </div> 
         <div className='pictureContainer'>
         <p className='overlay-text3 text'>Powerful</p>
         <div className="text-container1" style={{ position: 'absolute', bottom: '90%', left: '50%', transform: 'translateX(-50%)' ,marginTop:'-220px'}}>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Pendants</p>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Shop Now</p>
        </div>
         {/* <div className="text-container3">
          <p className='overlay-text text'>Pendants</p>
          <p className='overlay-text text'>Shop Now</p>
        </div> */}
         {/* <button className='butt'>Shop Now</button> */}
      
          <LazyImage
            key={3}
            src={image3}  // Source of the image
            alt={image3 }  // Alternative text
            className="picture"
            />
          
      
         </div>
         <div className='pictureContainer'>
         <p className='overlay-text4 text'>Opulent and Luxurious</p>
         <div className="text-container1" style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)' ,marginTop:'-220px'}}>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Neklaces</p>
          <p className='Text-test' style={{ color: '#F4DCBD', fontSize: '2rem', fontFamily: 'lux', margin: '0' }}>Shop Now</p>
        </div>
         {/* <div className="text-container4">
          <p className='overlay-text text'>Neklaces</p>
          <p className='overlay-text text'>Shop Here ➔</p>
        </div> */}
         {/* <button className='butt'>Shop Now</button> */}

          <LazyImage
            key={4}
            src={image4}  // Source of the image
            alt={image4 }  // Alternative text
            className="picture"
            />
          
      
         </div>
        
      
    </div>
  );
};

export default PictureRow;