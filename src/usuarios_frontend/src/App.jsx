import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Quotes from "./components/Quotes/Quotes";
// import Banner from "./components/Banner/Banner";
// import Banner2 from "./components/Banner/Banner2";
// import Features from "./components/Features/Features";
// import AppStore from "./components/AppStore/AppStore";
// import Footer from "./components/Footer/Footer";
// import PopupPlayer from "./components/PopupPlayer/PopupPlayer";
// import Menu from "./components/Menu";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"

import { createClient } from "@connect2ic/core"
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import {  useConnect } from "@connect2ic/react";
import UserCreate from "./components/UserCreate";
import Users from "./components/Users";
import HomePage from "./pages/HomePage";
import Login from "./utils/Login";
import "aos/dist/aos.css";

const App = () => {
 

  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
          <Connect2ICProvider >

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

    </main>
  );
};

export default App;
