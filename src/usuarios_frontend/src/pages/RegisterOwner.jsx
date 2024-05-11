import { useCanister, useConnect } from "@connect2ic/react";
import React, { useContext, useEffect, useState } from "react";
// import LayoutNavbar from "../layouts/LayoutNavbar";
import LayoutNavbar from "../layouts/LayoutNavbar";
import AOS from "aos";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";




const RegisterOwner = () => {

    const { principal } = useConnect();
    const [usuarios_backend] = useCanister("usuarios_backend");
    const {user, setUser} = useContext(UserContext)
    
    // const [loading, setLoading] = useState("");

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);



    useEffect(() => {
        console.log("principal", principal);
    }, [principal]);


    const saveUser = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const phone = form.phone.value;
        const latitude = Math.random() * (6.37-6.15) + 6.37
        const longitude = Math.random() * (-75.42+75.65) - 75.65
        setUser({
            id: principal,
            role: 'propietario',
            email: email,
            phone: phone,
            latitude: latitude,
            longitude: longitude
        })
        console.log(user)
        try{
            const userSaved = await usuarios_backend.createOwner(principal, email, phone, 'Propietario', latitude,longitude);
            if(userSaved){
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'Bienvenido a ParkApp!',
                footer: 'Ahora puedes acceder a nuestros servicios'
                }).then((value) => {
                    ;
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

    // const saveUserParker = async (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const phone = form.phone.value;
    //     const address = form.address.value;
    //     const userSaved = await usuarios_backend.createOwner(principal, email, phone, address, "Propietario");
    //     console.log(userSaved);

    //     // setLoading("Loading...");
    //     // await usuarios_backend.createUser(nombre, primerApellido, segundoApellido, alias);
    //     // setLoading("");
    //     // {
    //     //     document.getElementById('btnUserList').click();
    //     // }

    // }

    return (
        <div className="h-screen overflow-hidden ">

            <LayoutNavbar />
            {/* <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} /> */}

            <div className="row  mt-5 h-screen overflow-hidden">

                <div className="col-2"></div>
                <div className="col-8">
                    {true != ""
                        ?
                        <div className="alert alert-primary">{true}</div>
                        :
                        <div></div>}
                    <div className="w-full h-screen flex justify-center ">
                    <div  data-aos="fade-up"
                  data-aos-delay="200" className="card w-[400px] h-[450px]  mt-10 bg-white rounded-lg bg-opacity-10 shadow-xl shadow-violet-800">
                        <div className="card-header justify-center text-center mb-10 mt-5 ">
                        <p className="text-2xl">
                        Registro <span className="font-bold">Propietario</span>
            </p> 
                        </div>
                  
                        <div className="card-body">


                            <form class="max-w-sm mx-auto" onSubmit={saveUser}>
                                <div class="mb-5 mx-5	">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo</label>
                                    <input type="email" name="email" class="form-input" placeholder="name@flowbite.com" required />
                                </div>
                                <div class="mb-5  mx-5">
                                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu dispositivo móvil</label>
                                    <input type="number" name="phone" id="password" class="form-input" required />
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


export default RegisterOwner