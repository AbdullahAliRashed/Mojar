import React, { useState } from 'react';
import './FormView.css';
import cushion from '../../../assets/images/shapes/cushion.png';
import emerald from '../../../assets/images/shapes/Emerald.png';
import heart from '../../../assets/images/shapes/Heart.png';
import marquise from '../../../assets/images/shapes/marquise.png';
import oval from '../../../assets/images/shapes/oval.png';
import pear from '../../../assets/images/shapes/pear.png';
import princess from '../../../assets/images/shapes/princess.png';
import radiant from '../../../assets/images/shapes/radiant.png';
import round from '../../../assets/images/shapes/Round.png';
import tooshallow from '../../../assets/images/cut/tooshallow.png';
import toodeep from '../../../assets/images/cut/toodeep.png';
import excellent from '../../../assets/images/cut/excellenttogood.png';
import light from '../../../assets/images/color/light.png';
import slightltytinted from '../../../assets/images/color/slightlytinted.png';
import nearcolorless from '../../../assets/images/color/nearcolorless.png';
import colorless from '../../../assets/images/color/colorless.png';
import verylight from '../../../assets/images/color/verylight.png';
import flawless from '../../../assets/images/clarity/flawless.png';
import vslightlyincluded from '../../../assets/images/clarity/vslightlyincluded.png';
import vslightlyincluded2 from '../../../assets/images/clarity/vslightlyincluded2.png';
import included from '../../../assets/images/clarity/included.png';
import slightlyincluded from '../../../assets/images/clarity/slightlyincluded.png';

const FormView = ({ shape, color, clarity, cut, carat, onBack1 }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const getImage = (type, value) => {
    switch (type) {
      case 'shape':
        switch (value) {
          case 'CUSHION': return cushion;
          case 'EMERALD': return emerald;
          case 'HEART': return heart;
          case 'MARQUISE': return marquise;
          case 'OVAL': return oval;
          case 'PEAR': return pear;
          case 'PRINCESS': return princess;
          case 'RADIANT': return radiant;
          case 'ROUND': return round;
          default: return null;
        }
      case 'color':
        switch (value) {
          case 'COLORLESS': return colorless;
          case 'NEARLY COLORLESS': return nearcolorless;
          case 'SLIGHTLY TINTED': return slightltytinted;
          case 'VERY LIGHT': return verylight;
          case 'LIGHT': return light;
          default: return null;
        }
      case 'clarity':
        switch (value) {
          case 'FLAWLESS': return flawless;
          case 'VERY VERY SLIGHTLY INCLUDED': return vslightlyincluded;
          case 'VERY SLIGHTLY INCLUDED': return vslightlyincluded2;
          case 'SLIGHTLY INCLUDED': return slightlyincluded;
          case 'INCLUDED': return included;
          default: return null;
        }
      case 'cut':
        switch (value) {
          case 'EXCELLENT TO GOOD': return excellent;
          case 'TOO SHALLOW': return tooshallow;
          case 'TOO DEEP': return toodeep;
          default: return null;
        }
      default:
        return null;
    }
  };

  return (
    <div className="form-view">
      <div className="form-table">
        <div className="form-row">
          <div className="form-cell">
            <img src={getImage('shape', shape)} alt={shape} />
            <p className='form-img-text'>{shape}</p>
          </div>
          <div className="form-cell">
            <img src={getImage('color', color)} alt={color} />
            <p className='form-img-text'>{color}</p>
          </div>
          <div className="form-cell">
            <img src={getImage('clarity', clarity)} alt={clarity} />
            <p className='form-img-text'>{clarity}</p>
          </div>
          <div className="form-cell">
            <img src={getImage('cut', cut)} alt={cut} />
            <p className='form-img-text'>{cut}</p>
          </div>
          <div className="form-cell">{carat}CT</div>
        </div>
        <div className="form-row">
          <div className="form-cell">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-cell">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-cell">
            <input 
              type="text"
              placeholder="Contact Number"  
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-buttons">
        <button className="back-button1" onClick={onBack1}>Back</button>
        <button className="request-call-button">Request a Call</button>
      </div>
    </div>
  );
};

export default FormView;
