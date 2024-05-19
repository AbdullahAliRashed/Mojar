import React, { useState } from 'react';
import './Specs.css';
import Shape from './Specs-components/Shape';
import Color from './Specs-components/Color';
import Clarity from './Specs-components/Clarity';
import Cut from './Specs-components/Cut';
import Carat from './Specs-components/Carat';
import FormView from './Specs-components/FormView'; // Import the new component

const Specs = ({ selectedOption, onBack  }) => {
  const [customizeObject, setCustomizeObject] = useState({ 
    shape: 'ROUND',
    color: 'COLORLESS',
    clarity: 'FLAWLESS',
    cut: 'TOO SHALLOW',
    carat: '1.75'
  })
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(0);
  const [viewForm, setViewForm] = useState(false);

  const handleBackFromViewForm=()=>{
    setSelectedComponentIndex(1);
  }
  const components = [
    'shape',
    'color',
    'clarity',
    'cut',
    'carat'
  ];

  const nextComponent = () => {
    if (selectedComponentIndex < components.length - 1) {
      setSelectedComponentIndex((prevIndex) => prevIndex + 1);
    } else {
      setViewForm(true);
    }
  };

  const previousComponent = () => {
    if (viewForm) {
      setViewForm(false);
    } else if (selectedComponentIndex > 0) {
      setSelectedComponentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const getSelectedComponent = () => {
    switch (selectedComponentIndex) {
      case 0: return <Shape setVariable={handleCustomizeSelection} />;
      case 1: return <Color setVariable={handleCustomizeSelection} />;
      case 2: return <Clarity setVariable={handleCustomizeSelection} />;
      case 3: return <Cut setVariable={handleCustomizeSelection} />;
      case 4: return <Carat setVariable={handleCustomizeSelection} />;
    }
  }

  const handleCustomizeSelection = (key, value) => {
    setCustomizeObject(
      Object.assign(
        {},
        customizeObject,
        { [key]: value}
      )
    )
  }

  return (
    <div className='specs-menu'>
      {!viewForm ? (
        <>
          <div className='specs-buttons-container'>
            {components.map((comp, index) => (
              <React.Fragment key={comp}>
                <button
                  className={`${comp}-button ${selectedComponentIndex === index ? 'bold-text' : ''}`}
                  onClick={() => setSelectedComponentIndex(index)}
                >
                  {comp.toUpperCase()}
                </button>
                {index < components.length - 1 && <span className="separator">|</span>}
              </React.Fragment>
            ))}
          </div>
          <div>
            {getSelectedComponent()}
          </div>
          <div className='back-next-buttons-container'>
            {selectedComponentIndex === 0   && ( // Render back button only on Shape component
              <button className='back-button' onClick={onBack}>Back</button>
            )}
            <button className='next-button' onClick={nextComponent}>
              {selectedComponentIndex < components.length - 1 ? 'Next' : 'View Form'}
            </button>
          </div>
        </>
      ) : (
        <FormView 
          shape={customizeObject.shape} 
          color={customizeObject.color} 
          clarity={customizeObject.clarity} 
          cut={customizeObject.cut} 
          carat={customizeObject.carat} 
          onBack1={previousComponent}
        />
      )}
    </div>
  );
};

export default Specs;
