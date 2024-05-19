import React from 'react'
import flawless from '../../../assets/images/clarity/flawless.png';
import vslightlyincluded from '../../../assets/images/clarity/vslightlyincluded.png';
import vslightlyincluded2 from '../../../assets/images/clarity/vslightlyincluded2.png';
import included from '../../../assets/images/clarity/included.png';
import slightlyincluded from '../../../assets/images/clarity/slightlyincluded.png';

import './Clarity.css'
const Clarity = ({setVariable}) => {
    
    const clarityData = [
      {alt: "flawless", value: "FLAWLESS", img: flawless},
      {alt: "vslightlyincluded", value: "VERY VERY SLIGHTLY INCLUDED", img: vslightlyincluded},
      {alt: "vslightlyincluded2", value: "VERY SLIGHTLY INCLUDED", img: vslightlyincluded2},
      {alt: "slightlyincluded", value: "SLIGHTLY INCLUDED", img: slightlyincluded},
      {alt: "included", value: "INCLUDED", img: included}
    ]
    return (
      <div className="clarity-flex-container">
        {
          clarityData.map((comp)=>(
          <div className="clarity-item" key={comp.alt}>
            <img src={comp.img} alt={comp.alt} />
            <button onClick={() => setVariable("clarity", comp.value)}>{comp.value}</button>
          </div>
          ))
        }  
      </div>
    )
}

export default Clarity
