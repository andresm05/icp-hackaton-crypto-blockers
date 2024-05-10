import React from "react";
import HeroPng from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";

const Hero = ({ togglePlay }) => {
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 data-aos="fade-up" data className="text-6xl font-semibold font-sans">
                ParQApp{" "}
                {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  GAMES WITH OUR PLATFORM
                </span> */}
              </h1>
              <p data-aos="fade-up" className="text-2xl" data-aos-delay="300">
              Sácale ganancia a ese parqueadero que tienes sin usar y olvídate de dolores de cabeza a la hora de parkear.
              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                >
                  Unete ya!
                </button>
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
