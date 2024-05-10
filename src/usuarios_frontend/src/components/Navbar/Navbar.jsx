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
           
                    <ConnectButton />
                    <ConnectDialog />
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
