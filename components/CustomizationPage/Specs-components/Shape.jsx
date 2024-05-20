import React from 'react';
import cushion from '../../../assets/images/shapes/cushion.png';
import emerald from '../../../assets/images/shapes/Emerald.png';
import heart from '../../../assets/images/shapes/Heart.png';
import marquise from '../../../assets/images/shapes/marquise.png';
import oval from '../../../assets/images/shapes/oval.png';
import pear from '../../../assets/images/shapes/pear.png';
import princess from '../../../assets/images/shapes/princess.png';
import radiant from '../../../assets/images/shapes/radiant.png';
import round from '../../../assets/images/shapes/Round.png';
import './Shape.css'

const Shape = ({ setVariable }) => {
  const shapeData = [
    {img: round, alt: "round", value: "ROUND"},
    {img: emerald, alt: "emerald", value: "EMERALD"},
    {img: marquise, alt: "marquise", value: "MARQUISE"},
    {img: heart, alt: "heart", value: "HEART"},
    {img: pear, alt: "pear", value: "PEAR"},
    {img: cushion, alt: "cushion", value: "CUSHION"},
    {img: radiant, alt: "radiant", value: "RADIANT"},
    {img: oval, alt: "oval", value: "OVAL"},
    {img: princess, alt: "princess", value: "PRINCESS"}
  ]
  return (
    <div className="shape-flex-container">
      {
        shapeData.map((shape)=>(
          <div className="shape-item" key={shape.alt}>
            <img src={shape.img} alt={shape.alt} />
            <button onClick={() => setVariable("shape", shape.value)}>{shape.value}</button>
          </div>
        ))
      }    
    </div>
  )
}

export default Shape
