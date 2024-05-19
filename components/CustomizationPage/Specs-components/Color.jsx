import React from 'react';

import light from '../../../assets/images/color/light.png';
import slightltytinted from '../../../assets/images/color/slightlytinted.png';
import nearcolorless from '../../../assets/images/color/nearcolorless.png';
import colorless from '../../../assets/images/color/colorless.png';
import verylight from '../../../assets/images/color/verylight.png';

import './Color.css'

const Color = ({ setVariable }) => {
      const colorData = [
        {img: colorless, alt: "colorless", value: "COLORLESS"},
        {img: nearcolorless, alt: "nearcolorless", value: "NEAR COLORLESS"},
        {img: slightltytinted, alt: "slightltytinted", value: "SLIGHTLY TINTED"},
        {img: verylight, alt: "verylight", value: "VERY LIGHT"},
        {img: light, alt: "light", value: "LIGHT"},
      ]
  return (
    <div className="color-flex-container">
      {
        colorData.map((color) => (
          <div className="color-item" key={color.alt}>
            <img src={color.img} alt={color.alt} />
            <button onClick={() => setVariable("color", color.value)}>{color.value}</button>
          </div>
        ))
      }
  </div>
  )
}

export default Color;
