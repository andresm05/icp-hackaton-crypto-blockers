import React, { useEffect, useState } from "react";
import { RiUserLocationLine } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturesData = [
  {
    name: "Propietario",
    icon: <RiUserLocationLine className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "/Register-owner",
    description: "Tengo un espacio para alquilar",
    aosDelay: "300",
  },
  {
    name: "Parker",
    icon: <FaCar className="text-5xl text-primary group-hover:text-black duration-300" />,
    link: "/Register-parker",
    description: "Necesito parquear",
    aosDelay: "500",
  },
];

const FeaturesRol = ({ esOwner, setEsOwner }) => {
  const [linkDestino, setLinkDestino] = useState("");

  useEffect(() => {
    FeaturesData.forEach((data) => {
      if (data.name === "Propietario") {
        setEsOwner(true);
      } else{
        setEsOwner(false);
      }
    });
  }, [setEsOwner]);

  return (
    <>
      <div className="container py-14 sm:min-h-[600px] h-screen overflow-hidden">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Escoge tu rol
          </h1>
          <div className="grid grid-cols-1 lg:m-20 sm:grid-cols-2 md:grid-cols-2 gap-10 justify-center items-center">
            {FeaturesData.map((data, index) => (
              <Link to={data.link} key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300"
                >
                  <div className="grid place-items-center">{data.icon}</div>
                  <h1 className="text-2xl">{data.name}</h1>
                  <p>{data.description}</p>
                  <span className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300">
                    Learn More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesRol;