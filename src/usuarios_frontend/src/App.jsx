import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import * as usuarios_backend from "declarations/usuarios_backend";
import { createClient } from "@connect2ic/core"
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import { useConnect } from "@connect2ic/react";
import UserCreate from "./pages/UserCreate";
import Users from "./pages/Users";
import HomePage from "./pages/HomePage";
import RegisterOwner from "./pages/RegisterOwner";
import Booking from "./pages/Booking";
import RegisterParker from "./pages/RegisterParker";
import ClientMenu from "./pages/ClientMenu";
import OwnerMenu from "./pages/OwnerMenu";


import "aos/dist/aos.css";
import { UserProvider } from "./context/UserContext";

const App = () => {

  usuarios_backend


  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      {/* <Connect2ICProvider > */}
      <Connect2ICProvider client={client}>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/usuarios" element={<Users />} />
              <Route path="/nuevo-usuario" element={<UserCreate />} />
              {/* <Route path="/nuevo-usuario" element={<UserCreate />} /> */}
              <Route path="/Register-owner" element={<RegisterOwner />} />
              <Route path="/Register-parker" element={<RegisterParker />} />
              <Route path="/Booking" element={<Booking />} />
              {/* Ruta para el componente Login */}
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>

          </BrowserRouter>
        </UserProvider>

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

