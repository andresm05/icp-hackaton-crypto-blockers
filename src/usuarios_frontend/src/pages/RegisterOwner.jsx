import { useCanister, useConnect } from "@connect2ic/react";
import React, { useEffect, useState } from "react";
// import LayoutNavbar from "../layouts/LayoutNavbar";
import LayoutNavbar from "../layouts/LayoutNavbar";
import AOS from "aos";

const RegisterOwner = () => {




    const { principal } = useConnect();
    const [usuarios_backend] = useCanister("usuarios_backend");
    // const [loading, setLoading] = useState("");


    const [isPlay, setIsPlay] = useState(false);

    const togglePlay = () => {
        setIsPlay(!isPlay);
    };

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
        const userSaved = await usuarios_backend.createOwner(principal, email, phone, "Propietario", latitude,longitude);
        console.log(userSaved);

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
                    <div className="card">
                        <div className="card-header">
                            Registrar Usuario
                        </div>
                        <div className="card-body">


                            <form class="max-w-sm mx-auto" onSubmit={saveUser}>
                                <div class="mb-5">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo</label>
                                    <input type="email" name="email" class="form-input" placeholder="name@flowbite.com" required />
                                </div>
                                <div class="mb-5">
                                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu dispositivo móvil</label>
                                    <input type="number" name="phone" id="password" class="form-input" required />
                                </div>
                                <button type="submit" class="">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="col-2"></div>

            </div></div>



    )
}


export default RegisterOwner