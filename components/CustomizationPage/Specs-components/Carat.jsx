import React from 'react';
import carat from '../../../assets/images/carat.png';
import './Carat.css';
import Slider from './Slider';

const Carat = ({ setVariable }) => {
  return (
    <div className="carat-flex-container">
      <div className="carat-item">
        <img src={carat} alt="carat" />
        <Slider setVariable={setVariable} />
      </div>
    </div>
  );
};

export default Carat;
