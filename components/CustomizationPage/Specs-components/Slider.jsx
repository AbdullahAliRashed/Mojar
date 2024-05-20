import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ setVariable }) => {
  const [value, setValue] = useState(1.75);

  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    setVariable("carat", newValue); // Update parent state with new slider value
  };

  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="0.25"
        max="5.00"
        step="0.01"
        value={value}
        onChange={handleChange}
        className="slider1"
      />
      <div className="value-display">
        {value.toFixed(2)}<span>ct</span>
      </div>
    </div>
  );
};

export default Slider;
