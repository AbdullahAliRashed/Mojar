import React from 'react'
import ScrollNavbar from './Navbar/ScrollNavbar';
import Craftsmanship from './Crafts/Craftsmanship';
import Experience from './experience/Experience';
import Customization from './Customization/Customization';
import PicSlide from './PicSlide/PicSlide'
// import FixedNavbar from './components/Navbar/FixedNavbar';
// import VideoPlayer from './components/Video/VideoPlayer';
// import VideoOverlay from './components/Video/VideoOverlay';
import LoopingV from './Video/LoopingV';
import './Home.css';
const Home = () => {
  return (
    <div className='home'>
       <ScrollNavbar />
        <LoopingV/> 
      {/* <FixedNavbar/> */}
      <Craftsmanship/>
      <Experience/> 
      <Customization/>
      <PicSlide/>
      
    </div>
  )
}

export default Home
