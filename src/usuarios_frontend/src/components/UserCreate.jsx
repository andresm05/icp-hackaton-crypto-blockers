import { useCanister, useConnect } from "@connect2ic/react";
import React, { useEffect, useState } from "react";


const UserCreate = () => {

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

    useEffect(() => {
        console.log("principal", principal);
    }, [principal]);

    const saveUser = async (e) => {
        e.preventDefault();
        const form = e.target
        const nombre = form.nombre.value;
        const primerApellido = form.primerApellido.value;
        const segundoApellido = form.segundoApellido.value;
        const alias = form.alias.value;

        // setLoading("Loading...");

        // await usuarios_backend.createUser(nombre, primerApellido, segundoApellido, alias);
        // setLoading("");

        // {
        //     document.getElementById('btnUserList').click();
        // }


    }


    return (

        <div className="row  mt-5">
            <div className="col-2"></div>
            <div className="col-8">
                {true != ""
                    ?
                    <div className="alert alert-primary">{true}</div>
                    :
                    <div></div>
                }
                <div className="card">
                    <div className="card-header">
                        Registrar Usuario
                    </div>
                    <div className="card-body">


                        <form class="max-w-sm mx-auto">
                            <div class="mb-5">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                            </div>
                            <div class="mb-5">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className="col-2"></div>

        </div>
    )
}


export default UserCreate