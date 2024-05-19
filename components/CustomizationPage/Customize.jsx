import React, { useState } from 'react';
import "./Customize.css";
import mojargreenlogofull from "../../assets/images/mojar logo-04.png";
import mojargreenlogo from "../../assets/images/mojar logo-07.png";
import ring from '../../assets/images/diamond.png'
import Diamond from './Diamond';
import Gold from './Gold';
import Specs from './Specs';

const Customize = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleBackToCustomize = () => {
    setSelectedOption(null); // Reset selectedOption to go back to the customization
  };
  

  return (
    <div className='customization-page'>
      <div className='logo-container'>
        <img
          src={mojargreenlogofull}
          alt={`Mojar Logo`}
          className="mojar-logo-full"
        />
        
      </div>
     
      <div className='options-container'>

        {!selectedOption && (
          <div>
            <div className='moving-image'>
             <img
              src={ring}
              alt={`Gold ring`}
              className="ring-image"
              />
           </div>
          <div className='buttons-container'>            
            <button onClick={() => handleOptionClick('DIAMOND')}>DIAMOND</button>
            <span className="separator">|</span> {/* Vertical bar separator */}
            <button onClick={() => handleOptionClick('GOLD')}>GOLD</button>
          </div>
        </div>
        )}
        {selectedOption && (
          <Specs selectedOption={selectedOption} onBack={handleBackToCustomize} /> // Pass onBack callback
        )}
      </div>
    </div>
  );
}

export default Customize;
