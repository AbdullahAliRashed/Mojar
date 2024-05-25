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
  const [material,setMaterial]=useState(null);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  
  const handleBackToCustomize = () => {
    setSelectedOption(null); // Reset selectedOption to go back to the customization
  };
  

  return (
    <div className='customization-page'>
      {/* <div className='logo-container'>
        <img
          src={mojargreenlogofull}
          alt={`Mojar Logo`}
          className="mojar-logo-full"
        />
        
      </div> */}
     
      <div className='options-container'>

        {!selectedOption && (
          <div>
            <h1 style={{ color: '#043A29' }}>Craft Your Unique Identity</h1>
          <div className='buttons-container'>            
            <button onClick={() => {handleOptionClick('DIAMOND') ; setMaterial('DIAMOND')}}>DIAMOND</button>
            <span className="separator">|</span> {/* Vertical bar separator */}
            <button onClick={() => {handleOptionClick('GOLD');
              setMaterial('GOLD')
            }}>GOLD</button>
          </div>
        </div>
        )}
        {selectedOption && (
          <Specs selectedOption={selectedOption} onBack={handleBackToCustomize} material={material} /> // Pass onBack callback
        )}
      </div>
    </div>
  );
}

export default Customize;
