import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
  {
    name: "Suscripción",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Ofrecemos tres opciones de suscripción para propietrios de parqueaderos: mensual, semestral y anual. Cada suscripción proporciona acceso completo a todas las funciones de ParQApp durante el período seleccionado.",
    precio: "0",
    aosDelay: "300",
  },
  {
    name: "Comisión",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Los propietarios solo pagarán comisión por transacción alquilando sus espacios de estacionamiento a través de ParQApp. Esto significa que una pequeña tarifa se aplicará solo cuando se complete una reserva, lo que garantiza una transacción justa y transparente",
    aosDelay: "500",
  },

];

const Features = () => {

  const [isOwner, setIsOwner]= useState(false)

  return (
    <>
      <div className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
              Planes de Pago
          </h1>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mx-40">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p>{data.description}</p>

                <h1 className="text-2xl">{data.precio}</h1>
                <a
                  href={data.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn More
                </a>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
