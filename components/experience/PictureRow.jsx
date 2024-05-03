import React from 'react';
import './PictureRow.css';  // Import the updated CSS
import LazyImage from './LazyImage';
const PictureRow = ({ images }) => {
  return (
    <div className="picture-row">
      {images.map((image, index) => (
        <div className='pictureContainer'>
          
          <LazyImage
            key={index}
            src={image.src}  // Source of the image
            alt={image.alt || `Image ${index + 1}`}  // Alternative text
            className="picture"
          />
          {/* <div
            className="clickable-text"
            onClick={() => onTextClick(index)}  // Call a function with the index when clicked
          >
            {image.text || `Text ${index + 1}`}  
          </div> */}
        </div>
        
      ))}
    </div>
  );
};

export default PictureRow;