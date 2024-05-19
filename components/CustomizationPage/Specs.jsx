import React, { useState } from 'react';
import './Specs.css';
import Shape from './Specs-components/Shape';
import Color from './Specs-components/Color';
import Clarity from './Specs-components/Clarity';
import Cut from './Specs-components/Cut';
import Carat from './Specs-components/Carat';
import FormView from './Specs-components/FormView'; // Import the new component

const Specs = ({ selectedOption, onBack  }) => {
  const [shape, setShape] = useState('ROUND');
  const [color, setColor] = useState('COLORLESS');  
  const [clarity, setClarity] = useState('FLAWLESS');
  const [cut, setCut] = useState('TOO SHALLOW');
  const [carat, setCarat] = useState('1.75');
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(0);
  const [viewForm, setViewForm] = useState(false);

  const handleBackFromViewForm=()=>{
    setSelectedComponentIndex(1);
  }
  const components = [
    { key: 'shape', component: <Shape setVariable={setShape} /> },
    { key: 'color', component: <Color setVariable={setColor} /> },
    { key: 'clarity', component: <Clarity setVariable={setClarity} /> },
    { key: 'cut', component: <Cut setVariable={setCut} /> },
    { key: 'carat', component: <Carat setVariable={setCarat} /> },
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

  return (
    <div className='specs-menu'>
      {!viewForm ? (
        <>
          <div className='specs-buttons-container'>
            {components.map((comp, index) => (
              <React.Fragment key={comp.key}>
                <button
                  className={`${comp.key}-button ${selectedComponentIndex === index ? 'bold-text' : ''}`}
                  onClick={() => setSelectedComponentIndex(index)}
                >
                  {comp.key.toUpperCase()}
                </button>
                {index < components.length - 1 && <span className="separator">|</span>}
              </React.Fragment>
            ))}
          </div>
          <div>
            {components[selectedComponentIndex].component}
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
          shape={shape} 
          color={color} 
          clarity={clarity} 
          cut={cut} 
          carat={carat} 
          onBack1={previousComponent}
        />
      )}
    </div>
  );
};

export default Specs;
