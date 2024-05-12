import React from 'react';
import LoopingV from '../components/Video/LoopingV';
import Craftsmanship from '../components/Crafts/Craftsmanship';
import Experience from '../components/experience/Experience';
import Customization from '../components/Customization/Customization';
import PicSlide from '../components/PicSlide/PicSlide';



const HomePage = () => {
  return (
    <div>
        <LoopingV/>
        <Craftsmanship/>
        <Experience/> 
        <Customization/>
        <PicSlide/> 
    </div>
  );
};

export default HomePage;