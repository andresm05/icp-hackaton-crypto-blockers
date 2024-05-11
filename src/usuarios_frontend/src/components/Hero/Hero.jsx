import React from "react";
import HeroPng from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
const Hero = ({ togglePlay , userRegisteredUser}) => {
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              
              
                {!userRegisteredUser? (
            <h1 data-aos="fade-up" data 
            className="text-6xl font-semibold font-sans">
              ParQApp{" "}
    
            </h1>
              ): (<></>)}
     
              {userRegisteredUser === "propietario"? (
                <h1 data-aos="fade-up" data 
                className="text-6xl font-semibold font-sans">
               Bienvenido Propietario {" "}
 
                </h1>
                ): (<></>)}

              {userRegisteredUser === "cliente"? (
                <h1 data-aos="fade-up" data 
                className="text-6xl font-semibold font-sans">
                  Bienvenido Cliente{" "}

                </h1>
                ): (<></>)}

              {!userRegisteredUser? (
   <p data-aos="fade-up" className="text-2xl" data-aos-delay="300">
   Sácale ganancia a ese parqueadero que tienes sin usar y olvídate de dolores de cabeza a la hora de parquear.
   </p>
              ): (<></>)}

              {userRegisteredUser === "propietario"? (

              <p data-aos="fade-up" className="text-2xl" data-aos-delay="300">
            Ahora eres parte de nuestra plataforma, aprovecha ese parqueadero libre que tu tienes!
              </p>
                ): (<></>)}


              {userRegisteredUser === "cliente"? (

              <p data-aos="fade-up" className="text-2xl" data-aos-delay="300">
            Bienvenido cliente, entra y encuentra tu lugar de parqueo perfecto.
              </p>
                ): (<></>)}


              <div className="flex gap-6">

              {!userRegisteredUser? (
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                >

                  Unete ya!
                </button>): (<></>)}


                {userRegisteredUser === "propietario"? (
             <Link to="/owner-menu" data-aos="fade-up" data-aos-delay="500" className="primary-btn">
             Ingresa a tu plataforma
           </Link>): (<></>)}


                {userRegisteredUser === "cliente"? (
                <Link to="/client-menu" data-aos="fade-up" data-aos-delay="500" className="primary-btn">
                Ingresa a tu plataforma
              </Link>): (<></>)}
                {/* <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  // onClick={togglePlay}
                  className="flex items-center gap-2"
                >
                  {" "}
                  <BiPlayCircle className="text-3xl" />
                  
                </button> */}
              </div>
            </div>
            {/* image section */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={HeroPng} alt="" className="" />
            </div>
          </div>

          {/* Animated Blob */}
          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
