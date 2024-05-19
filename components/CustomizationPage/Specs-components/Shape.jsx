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
  const handleClick = (data) => () => {
    setVariable(data);
  };
  return (
    <div className="shape-flex-container">
    <div className="shape-item">
      <img src={round} alt="round" />
      <button onClick={handleClick('ROUND')}>ROUND</button>
    </div>
    <div className="shape-item">
      <img src={emerald} alt="emerald" />
      <button  onClick={handleClick('EMERALD')}>EMERALD</button>
    </div>
    <div className="shape-item">
      <img src={marquise} alt="marquise" />
      <button onClick={handleClick('MARQUISE')}>MARQUISE</button>
    </div>
    <div className="shape-item">
      <img src={heart} alt="heart" />
      <button onClick={handleClick('HEART')}>HEART</button>
    </div>
    <div className="shape-item">
      <img src={pear} alt="pear" />
      <button onClick={handleClick('PEAR')}> PEAR</button>
    </div>
    <div className="shape-item">
      <img src={cushion} alt="cushion" />
      <button onClick={handleClick('CUSHION')}>CUSHION</button>
    </div>
    <div className="shape-item">
      <img src={radiant} alt="radiant" />
      <button onClick={handleClick('RADIANT')}>RADIANT</button>
    </div>
    <div className="shape-item">
      <img src={oval} alt="oval" />
      <button onClick={handleClick('OVAL')}>OVAL</button>
    </div>
    <div className="shape-item">
      <img src={princess} alt="princess" />
      <button onClick={handleClick('PRINCESS')}>PRINCESS</button>
    </div>
    
  </div>
  )
}

export default Shape
