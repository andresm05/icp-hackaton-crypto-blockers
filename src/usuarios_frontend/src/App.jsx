import React, { useState, useEffect } from "react";

import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import * as usuarios_backend from "declarations/usuarios_backend";
import { createClient } from "@connect2ic/core"
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import {  useConnect } from "@connect2ic/react";
import UserCreate from "./components/UserCreate";
import Users from "./components/Users";
import HomePage from "./pages/HomePage";

import "aos/dist/aos.css";

const App = () => {
 
  usuarios_backend 

  // const {principal} = useConnect();

  // function onElementAvailable(selector, callback) {
  //   const observer = new MutationObserver(mutations => {
  //     if (document.querySelector(selector)) {
  //       observer.disconnect();
  //       callback();
  //     }
  //   });
  
  //   observer.observe(document.body, { childList: true, subtree: true });
  // }
  
  // onElementAvailable(".ii-styles", () => {
  //   const btn2 = Array.from(document.getElementsByClassName('ii-styles'));


  //   Object.assign(btn2[0].style,custom_style);

  //   const texto = Array.from(document.getElementsByClassName('button-label'));
  //   if (texto[0])
  //       texto[0].remove();

  //   const img = Array.from(document.getElementsByClassName('img-styles'));
  //   img[0].style.height = "25px";

  // });

  // onElementAvailable(".connect-button", () => {
  //   const btn = Array.from(document.getElementsByClassName('connect-button'));
  //   const custom_style={
  //       "background-color": "blue",
  //       "font-size": "17px",
  //   }
  //   Object.assign(btn[0].style,custom_style);
  //   if ( btn[0].textContent == 'Connect' || btn[0].textContent == 'Conectar II')
  //       btn[0].textContent = 'Conectar II' ;
  //   else
  //       btn[0].textContent = 'Desconectar II' ;
  // });



  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
          {/* <Connect2ICProvider > */}
          <Connect2ICProvider client={client}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/nuevo-usuario" element={<UserCreate />} />
          {/* Ruta para el componente Login */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>


        
      </BrowserRouter>
  
      </Connect2ICProvider>

      {/* </Connect2ICProvider> */}

    </main>
  );
};



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

export default App;

