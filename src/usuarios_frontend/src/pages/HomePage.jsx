import React from 'react'
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import Hero from '../components/Hero/Hero';
import Hero from "../components/Hero/Hero";
import Quotes from "../components/Quotes/Quotes";
import Banner from "../components/Banner/Banner";
import Banner2 from "../components/Banner/Banner2";
import Features from "../components/Features/Features";
import AppStore from "../components/AppStore/AppStore";
import Footer from "../components/Footer/Footer";
import PopupPlayer from "../components/PopupPlayer/PopupPlayer";
import Navbar from '../components/Navbar/Navbar';
const HomePage = () => {
    
    
      const [isPlay, setIsPlay] = useState(false);
    
      const togglePlay = () => {
        setIsPlay(!isPlay);
      };
    
      useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
    
    
  return (
    <div>
        
    {console.log("estamos perdidos")}
    <Navbar/>
            <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Features />
      <AppStore />
      <Footer />

      {/* Video Player */}
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} /></div>
  )
}

export default HomePage