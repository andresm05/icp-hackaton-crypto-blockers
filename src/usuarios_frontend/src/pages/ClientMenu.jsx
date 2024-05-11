import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero/Hero";
import Quotes from "../components/Quotes/Quotes";
import Banner from "../components/Banner/Banner";
import Banner2 from "../components/Banner/Banner2";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import PopupPlayer from "../components/PopupPlayer/PopupPlayer";
import Navbar from '../components/Navbar/Navbar';
import { useCanister, useConnect } from "@connect2ic/react";
// import ClientMenu from '../components/Features/ClientMenu';
import ClientMenuFeatures from '../components/Features/ClientMenuFeatures';

const ClientMenu = () => {
  const { principal } = useConnect();
  const [usuarios_backend] = useCanister("usuarios_backend");
  const [userSaved, setUserSaved] = useState(null); // Define userSaved state variable
  const [userRegisteredUser, setUserRegisteredUser] = useState(null); // Define userSaved state variable

  
  const userSavedfake = {
    // rol: "propietario"
  }

  useEffect(() => {
    loadingUser();
    if (userSavedfake.rol == "propietario") {
      setUserRegisteredUser("propietario")
    }
    else if (userSavedfake.rol == "cliente") {
      setUserRegisteredUser("cliente")
    } 
    else {
      setUserRegisteredUser(null)
    }


  }, []);


  const loadingUser = async () => {
    try {

      const userSaved = await usuarios_backend.readUserById(principal);
      setUserSaved(userSaved); // Set userSaved state variable
    } catch (error) {
    }
  };


  // console.log("estos son los usuarios",userSaved); // Log userSaved state variable
  // console.log(principal);

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
          <Navbar userRegistered = {userRegisteredUser} />
          <ClientMenuFeatures/>

          </div>
      
 
  );
}

export default ClientMenu;
