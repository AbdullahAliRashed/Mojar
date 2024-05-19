import React from 'react'
import flawless from '../../../assets/images/clarity/flawless.png';
import vslightlyincluded from '../../../assets/images/clarity/vslightlyincluded.png';
import vslightlyincluded2 from '../../../assets/images/clarity/vslightlyincluded2.png';
import included from '../../../assets/images/clarity/included.png';
import slightlyincluded from '../../../assets/images/clarity/slightlyincluded.png';

import './Clarity.css'
const Clarity = ({setVariable}) => {

    const handleClick = (data) => () => {
        setVariable(data);
      };
    return (
        <div className="clarity-flex-container">
        <div className="clarity-item">
          <img src={flawless} alt="flawless" />
          <button onClick={handleClick('FLAWLESS')}>FLAWLESS</button>
        </div>
        <div className="clarity-item">
          <img src={vslightlyincluded} alt="vslightlyincluded" />
          <button onClick={handleClick('VERY VERY SLIGHTLY INCLUDED')}>VERY VERY SLIGHTLY INCLUDED</button>
        </div>
        <div className="clarity-item">
          <img src={vslightlyincluded2} alt="vslightlyincluded2" />
          <button onClick={handleClick('VERY SLIGHTLY INCLUDED')}>VERY SLIGHTLY INCLUDED</button>
        </div>
        <div className="clarity-item">
          <img src={slightlyincluded} alt="slightlyincluded" />
          <button onClick={handleClick('SLIGHTLY INCLUDED')}>SLIGHTLY INCLUDED</button>
        </div>
        <div className="clarity-item">
          <img src={included} alt="included" />
          <button onClick={handleClick('INCLUDED')}>INCLUDED</button>
        </div>
       
        
      </div>
      )
}

export default Clarity
