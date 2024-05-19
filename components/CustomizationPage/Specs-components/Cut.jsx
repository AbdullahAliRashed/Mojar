import React from 'react'
import tooshallow from '../../../assets/images/cut/tooshallow.png';
import toodeep from '../../../assets/images/cut/toodeep.png';
import excellent from '../../../assets/images/cut/excellenttogood.png';
import './Cut.css'
const Cut = ({setVariable}) => {
      const cutData = [
        {img: tooshallow, alt: "tooshallow", value: "TOO SHALLOW"},
        {img: toodeep, alt: "toodeep", value: "TOO DEEP"},
        {img: excellent, alt: "excellent", value: "EXCELLENT TO GOOD"}
      ]
    return (
        <div className="cut-flex-container">
          {
            cutData.map((cut)=> (
              <div className="cut-item" key={cut.alt}>
                <img src={cut.img} alt={cut.alt} />
                <button onClick={() => setVariable('cut', cut.value)}>{cut.value}</button>
              </div>
            ))
          }  
      </div>
      )
}

export default Cut
