import React from 'react'
import PictureRow from './PictureRow'
import './Experience.css'
import image1 from '../../assets/images/image1.jpeg'
import image3 from '../../assets/images/image2.jpeg'
import image2 from '../../assets/images/image3.jpeg'
import image4 from '../../assets/images/image4.jpeg'
const images = [
    { src: image1, alt: 'First Picture' ,text: 'RINGS'},
    { src: image2, alt: 'Second Picture' , text: 'BRACELETS'},
    { src: image3, alt: 'Third Picture' ,text: 'TRINKETS'},
    { src: image4, alt: 'Fourth Picture' ,text: 'NECKLACES'},
  ];

const experience = () => {
  return (
    <div className='Experience'>
       <PictureRow images={images} />
    </div>
  )
}

export default experience
