import React from 'react';
import ScrollNavbar from './components/Navbar/ScrollNavbar';
import Craftsmanship from './components/Crafts/Craftsmanship';
import Experience from './components/experience/Experience';
import Customization from './components/Customization/Customization';
import PicSlide from './components/PicSlide/PicSlide'
import Footer from './components/Footer/Footer';
import LoopingV from './components/Video/LoopingV'
const App = () => {
  return (
    <div>
      <LoopingV/>
      <ScrollNavbar />
      <Craftsmanship/>
      <Experience/> 
      <Customization/>
      <PicSlide/>
      <Footer/>

    </div>
  );
};

export default App;