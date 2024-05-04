import React from 'react';
import ScrollNavbar from './components/Navbar/ScrollNavbar';
import Craftsmanship from './components/Crafts/Craftsmanship';
import Experience from './components/experience/Experience';
import Customization from './components/Customization/Customization';
import PicSlide from './components/PicSlide/PicSlide'
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <ScrollNavbar />
      <Craftsmanship/>
      <Experience/> 
      <Customization/>
      <PicSlide/>
      <Footer/>



      <div style={{ height: '2000px' }}> {/* Example content to allow scrolling */}
      </div>

    </div>
  );
};

export default App;