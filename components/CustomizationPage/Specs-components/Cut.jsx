import React from 'react'
import tooshallow from '../../../assets/images/cut/tooshallow.png';
import toodeep from '../../../assets/images/cut/toodeep.png';
import excellent from '../../../assets/images/cut/excellenttogood.png';
import './Cut.css'
const Cut = ({setVariable}) => {
    const handleClick = (data) => () => {
        setVariable(data);
      };
    return (
        <div className="cut-flex-container">
        <div className="cut-item">
          <img src={tooshallow} alt="tooshallow" />
          <button onClick={handleClick('TOO SHALLOW')}>TOO SHALLOW</button>
        </div>
        <div className="cut-item">
          <img src={toodeep} alt="toodeep" />
          <button onClick={handleClick('TOO DEEP')}>TOO DEEP</button>
        </div>
        <div className="cut-item">
          <img src={excellent} alt="excellent" />
          <button onClick={handleClick('EXCELLENT TO GOOD')}>EXCELLENT TO GOOD</button>
        </div>
       
       
        
      </div>
      )
}

export default Cut
