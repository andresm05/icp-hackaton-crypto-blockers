import { useCanister, useConnect } from "@connect2ic/react";
import React, { useEffect, useState } from "react";
import Quotes from "../components/Quotes/Quotes";
import Banner from "../components/Banner/Banner";
import Banner2 from "../components/Banner/Banner2";
import FeaturesRol from "../components/Features/FeaturesRol";
// import LayoutNavbar from "../layouts/LayoutNavbar";
import LayoutNavbar from "../layouts/LayoutNavbar";
import AOS from "aos";

const UserCreate = () => {
  
  const { principal } = useConnect();


  const [esOwner, setIsOwner] = useState();
  
  const [isPlay, setIsPlay] = useState(false);
    const [usuarios_backend] = useCanister("usuarios_backend");
    // const [loading, setLoading] = useState("");
    const [user, setUser] = useState({
        id: principal,
        name: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
    })
    
    
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
  

    useEffect(() => {
        console.log("principal", principal);
    }, [principal]);


    const saveUser = async (e) => {
        e.preventDefault();
        const form = e.target
        const nombre = form.nombre.value;
        const primerApellido = form.primerApellido.value;
        const segundoApellido = form.segundoApellido.value;
        const alias = form.alias.value;
        
        // setLoading("Loading...");

        // await usuarios_backend.createUser(nombre, primerApellido, segundoApellido, alias);
        // setLoading("");

        // {
        //     document.getElementById('btnUserList').click();
        // }


    }


    return (
        <><LayoutNavbar  />
        {console.log("este es el owner, será?"  , esOwner)}
        {/* <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} /> */}
      <FeaturesRol esOwner = {esOwner} setEsOwner = {setIsOwner} />
      
        </>


        
    )
}


export default UserCreate