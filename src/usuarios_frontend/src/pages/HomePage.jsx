import React, {useContext, useState, useEffect } from 'react';
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
import { UserContext } from "../context/UserContext";



const HomePage = () => {
  const { principal } = useConnect();
  const [usuarios_backend] = useCanister("usuarios_backend");
  const [userSaved, setUserSaved] = useState(null); // Define userSaved state variable
  const [userRegisteredUser, setUserRegisteredUser] = useState(null); // Define userSaved state variable

  const {user, setUser} = useContext(UserContext)
  const {customer, setCustomer} = useContext(UserContext)
    
    // console.log("aqui está saliendo el user", user.role)
    console.log("aqui está saliendo el user PROPI????", user["role"])

    console.log("aqui está saliendo el COSTUMEEEER", customer)
    console.log("aqui está saliendo el user", customer["role"])
    console.log("aqui está saliendo el user", user["role"])

    // console.log("aqui está saliendo el user", user.role)
  // const user = {
  //   // rol: "propietario"
  // }

  useEffect(() => {
    loadingUser();
    if (principal){
      if (customer) {
        setUserRegisteredUser("cliente")
      }
      else if (user["role"] == "propietario") {
        setUserRegisteredUser("propietario")
      } 
      else {
        setUserRegisteredUser(null)
      }
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
   
      userRegisteredUser == "propietario" ? (
        <div>
          <Navbar userRegistered = {userRegisteredUser} />
          <Hero togglePlay={togglePlay} userRegisteredUser = {userRegisteredUser} />
          <Footer />
        </div>
      ) : userRegisteredUser == "cliente" ? (
        <div>
          <Navbar userRegistered = {userRegisteredUser} />
          <Hero togglePlay={togglePlay} userRegisteredUser = {userRegisteredUser}/>
          <Footer />
        </div>
      ) : (
        <div>

          <Navbar  userRegistered = {userRegisteredUser}/>
          <Hero togglePlay={togglePlay} userRegisteredUser = {userRegisteredUser} />
          <Quotes />
          <Banner togglePlay={togglePlay} />
          <Banner2 togglePlay={togglePlay} />
          <Features />
          <Footer />
          <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
        </div>
      )
 
  );
}

export default HomePage;
