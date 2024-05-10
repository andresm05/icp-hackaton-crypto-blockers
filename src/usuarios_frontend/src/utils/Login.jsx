import React from 'react'


import { createClient } from "@connect2ic/core"
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import {  useConnect } from "@connect2ic/react";

import * as usuarios_backend from "declarations/usuarios_backend";



const Login = () => {


    const {principal} = useConnect();

    console.log("este es el principal", principal)
    function onElementAvailable(selector, callback) {
      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          observer.disconnect();
          callback();
        }
      });
    
      observer.observe(document.body, { childList: true, subtree: true });
    }
  
  
    onElementAvailable(".ii-styles", () => {
      const btn2 = Array.from(document.getElementsByClassName('ii-styles'));
  
      
  
      Object.assign(btn2[0].style,custom_style);
  
      const texto = Array.from(document.getElementsByClassName('button-label'));
      if (texto[0])
          texto[0].remove();
  
      const img = Array.from(document.getElementsByClassName('img-styles'));
      img[0].style.height = "25px";
  
    });
  
    onElementAvailable(".connect-button", () => {
      const btn = Array.from(document.getElementsByClassName('connect-button'));
      const custom_style={
          "background-color": "blue",
          "font-size": "17px",
      }
      Object.assign(btn[0].style,custom_style);
      if ( btn[0].textContent == 'Connect' || btn[0].textContent == 'Conectar II')
          btn[0].textContent = 'Conectar II' ;
      else
          btn[0].textContent = 'Desconectar II' ;
  
  
    });
  

    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);


  return (
    <div>             
       {/* <Connect2ICProvider client={client}> */}
      <ConnectButton />
    <ConnectDialog />
    {/* </Connect2ICProvider> */}
    </div>
  )
}


export default Login
  

const client = createClient({
  canisters: {
    usuarios_backend,
  },
  providers: [
    new InternetIdentity({ providerUrl: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943" })
  ],
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: true,
  },
});