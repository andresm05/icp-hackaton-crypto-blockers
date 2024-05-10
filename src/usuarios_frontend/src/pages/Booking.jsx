import { useCanister, useConnect } from "@connect2ic/react";
import React, { useEffect, useState } from "react";
import Quotes from "../components/Quotes/Quotes";
import Banner from "../components/Banner/Banner";
import Banner2 from "../components/Banner/Banner2";
import FeaturesRol from "../components/Features/FeaturesRol";
// import LayoutNavbar from "../layouts/LayoutNavbar";
import LayoutNavbar from "../layouts/LayoutNavbar";
import AOS from "aos";

const Booking = () => {

    const { principal } = useConnect();
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
        
    const [isPlay, setIsPlay] = useState(false);
    
 

    return (
        <><LayoutNavbar />

        </>


        
    )
}


export default Booking