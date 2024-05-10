import React from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

import { createClient } from "@connect2ic/core"
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import {  useConnect } from "@connect2ic/react";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from "../Home";
import Users from "../Users";
import UserCreate from "../UserCreate";
import * as usuarios_backend from "declarations/usuarios_backend";
import Login from "../../utils/Login";

// principal

const Navbar = () => {

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


  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    // <BrowserRouter>
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" className="h-16" />
            <p className="text-3xl">
              VR <span className="font-bold">World</span>
            </p>
          </div>
          {/* Desktop Menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">

              <Link to='/' className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500">Inicio</Link>
                    <Link to='/nuevo-usuario'className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500" >Nuevo</Link>
                    <Link to='/usuarios'className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500" id="btnUserList">Usuarios</Link>
                    {/* <span className="fs-6 text">{principal}</span>
                    console.log(principal) */}
              {/* <Login/> */}
              {/* Darkmode feature */}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              )}
            </div>
          </div>

        </div>
        
      </div>
    </div>

  );
};

export default Navbar
// const client = createClient({
//   canisters: {
//     usuarios_backend,
//   },
//   providers: [
//     new InternetIdentity({ providerUrl: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943" })
//   ],
//   globalProviderConfig: {
//     /*
//      * Disables dev mode in production
//      * Should be enabled when using local canisters
//      */
//     dev: true,
//   },


//   // Upgrading code for canister internet_identity, with canister ID bkyz2-fmaaa-aaaaa-qaaaq-cai
//   // Module hash 764cff569a98a3c4d54cba6750fda63f554fc53e7d42a6365d9bdec3280d63c3 is already installed.
//   // Upgrading code for canister usuarios_backend, with canister ID bd3sg-teaaa-aaaaa-qaaba-cai
//   // Module hash b43e17756aa1ab6418a8ae8ac82f3836a61a78a3d798f1a93ba125bfde5b9497 is already installed.
//   // Upgrading code for canister usuarios_frontend, with canister ID be2us-64aaa-aaaaa-qaabq-cai
//   // Module hash 32e92f1190d8321e97f8d8f3e793019e4fd2812bfc595345d46d2c23f74c1ab5 is already installed.
//   // Uploading assets to asset canister...


// });


// export default () => (
//   <Connect2ICProvider client={client}>
//     <Navbar />
//   </Connect2ICProvider>
// )

