
import { createClient } from "@connect2ic/core"
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import {  useConnect } from "@connect2ic/react";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from "./Home";
import Users from "./Users";
import UserCreate from "./UserCreate";
import * as usuarios_backend from "declarations/usuarios_backend";

// import Programas from "./Programas";
// import Alumnos from "./Alumnos";
// import AreaNueva from "./AreaNueva";

const MenuCopy = () => {
  const {principal} = useConnect();

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

    // const custom_style={
    //     "color": "red",
    //     "background-color": "blue",
    //     "padding": "3px",
    //     "margin-left": "4px"
    // }
    

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
  return (
            // <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                    {/* <span className="fs-6 text">{principal}</span> */}

                    <Connect2ICProvider client={client}>
             
                    </Connect2ICProvider>
            </div>
       



  )
}


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


export default MenuCopy

