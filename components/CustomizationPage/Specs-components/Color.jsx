import React from 'react';

import light from '../../../assets/images/color/light.png';
import slightltytinted from '../../../assets/images/color/slightlytinted.png';
import nearcolorless from '../../../assets/images/color/nearcolorless.png';
import colorless from '../../../assets/images/color/colorless.png';
import verylight from '../../../assets/images/color/verylight.png';

import './Color.css'

const Color = ({ setVariable }) => {
    const handleClick = (data) => () => {
        setVariable(data);
      };
  return (
    <div className="color-flex-container">
    <div className="color-item">
      <img src={colorless} alt="colorless" />
      <button onClick={handleClick('COLORLESS')}>COLORLESS</button>
    </div>
    <div className="color-item">
      <img src={nearcolorless} alt="nearcolorless" />
      <button onClick={handleClick('NEAR COLORLESS')}>NEAR COLORLESS</button>
    </div>
    <div className="color-item">
      <img src={slightltytinted} alt="slightltytinted" />
      <button onClick={handleClick('SLIGHTLY TINTED')}> SLIGHTLY TINTED</button>
    </div>
    <div className="color-item">
      <img src={verylight} alt="verylight" />
      <button onClick={handleClick('VERY LIGHT')}>VERY LIGHT</button>
    </div>
    <div className="color-item">
      <img src={light} alt="light" />
      <button onClick={handleClick('LIGHT')}>LIGHT</button>
    </div>
   
    
  </div>
  )
}

export default Color;
