import { useCanister, useConnect } from "@connect2ic/react";
import React, { useContext, useEffect, useState } from "react";
// import LayoutNavbar from "../layouts/LayoutNavbar";
import LayoutNavbar from "../layouts/LayoutNavbar";
import AOS from "aos";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

const RegisterParker = () => {

    const { principal } = useConnect();
    const [usuarios_backend] = useCanister("usuarios_backend");
    // const [loading, setLoading] = useState("");

    const {customer, setCustomer} = useContext(UserContext)
    
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    const saveUserCustomer = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const phone = form.phone.value;
        const vehiclePlate = form.vehiclePlate.value;
        const vehicleSize = parseInt(form.vehicleSize.value);
        const latitude = Math.random() * (6.37 - 6.15) + 6.37
        const longitude = Math.random() * (-75.42 + 75.65) - 75.65

        const vehicleType = form.vehicleType.value;

        setCustomer({
            id: principal,
            plate: vehiclePlate,
            size: vehicleSize,
            vehicle_name: vehicleType,
            latitude: latitude,
            longitude: longitude,
        })
        console.log(customer)
        try{
            const userSaved = await usuarios_backend.createCustomer(principal, email, phone, "Cliente", latitude, longitude, vehicleType, vehiclePlate, vehicleSize);
            if (userSaved){
                Swal.fire({
                    icon: 'success',
                    title: 'Registro exitoso',
                    text: 'Bienvenido a ParkApp!',
                    footer: 'Ahora puedes acceder a nuestros servicios'
                    
                    }). then((salida)=>{
                        console.log(salida)
                    })
            }

        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal!',
                footer: 'Por favor intenta de nuevo'
                })
            }
        // setLoading("Loading...");
        // await usuarios_backend.createUser(nombre, primerApellido, segundoApellido, alias);
        // setLoading("");
        // {
        //     document.getElementById('btnUserList').click();
        // }

    }

    return (
        <div className=" ">

            <LayoutNavbar />
            {/* <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} /> */}

            <div className="row  mt-5">
                <div className="col-2"></div>
                <div className="col-8">
                    {true != ""
                        ?
                        <div className="alert alert-primary">{true}</div>
                        :
                        <div></div>}
                    <div className="w-full h-screen flex justify-center ">
                        <div data-aos="fade-up"
                            data-aos-delay="200" className="card w-[400px] h-[450px]  mt-10 bg-white rounded-lg bg-opacity-10 shadow-xl shadow-violet-800">
                            <div className="card-header justify-center text-center mb-10 mt-5 ">
                                <p className="text-2xl">
                                    Registro <span className="font-bold">Cliente</span>
                                </p>
                            </div>

                            <div className="card-body">


                                <form className="max-w-sm mx-auto" onSubmit={saveUserCustomer}>
                                    <div className="mb-5">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo</label>
                                        <input type="email" name="email" className="form-input" placeholder="name@flowbite.com" required />
                                    </div>
                                    <div className="mb-5">
                                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu dispositivo móvil</label>
                                        <input type="number" name="phone" className="form-input" required />
                                    </div>
                                    <div className="mb-5">
                                        <label for="vehicleType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de vehiculo</label>
                                        <input type="text" name="vehicleType" className="form-input" required />
                                    </div>
                                    <div className="mb-5">
                                        <label for="vehiclePlate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Placa del vehículo</label>
                                        <input type="text" name="vehiclePlate" className="form-input" required />
                                    </div>
                                    <div className="mb-5">
                                        <select name="vehicleSize" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value=''>Elija el tamaño que mejor se ajuste a tu espacio</option>
                                            <option value={1}>{`Pequeño (Largo: 415cm, Ancho: 160cm, Alto:125cm)`}</option>
                                            <option value={2}>{`Mediano (Largo: 475cm, Ancho: 170cm, Alto:125cm)`}</option>
                                            <option value={3}>{`Grande (Largo: 525cm, Ancho: 200cm, Alto:155cm)`}</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="mx-5 form-send-button mt-4">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>

            </div></div>



    )
}


export default RegisterParker