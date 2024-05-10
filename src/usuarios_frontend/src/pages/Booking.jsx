import { useCanister, useConnect } from "@connect2ic/react";
import React, { useEffect, useState } from "react";
// import LayoutNavbar from "../layouts/LayoutNavbar";
import LayoutNavbar from "../layouts/LayoutNavbar";

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

    const saveUser = async (e) => {
        e.preventDefault();
        const form = e.target;
        const size = parseInt(form.size.value);
        const fee = parseFloat(form.fee.value);
        
        try {
            const result = await usuarios_backend.createBooking(principal,size, fee );
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <><LayoutNavbar />
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
                            Agregar nuevo espacio de reserva
                        </div>
                        <div className="card-body">


                            <form class="max-w-sm mx-auto" onSubmit={saveUser}>
                                <div class="mb-5">
                                    <label for="size" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                    <select name="size" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value=''>Elija el tamaño que mejor se ajuste a tu espacio</option>
                                        <option value={1}>{`Pequeño (Largo: 415cm, Ancho: 160cm, Alto:125cm)`}</option>
                                        <option value={2}>{`Mediano (Largo: 475cm, Ancho: 170cm, Alto:125cm)`}</option>
                                        <option value={3}>{`Grande (Largo: 525cm, Ancho: 200cm, Alto:155cm)`}</option>
                                    </select>
                                </div>
                                <div class="mb-5">
                                    <label for="fee" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{`Tarifa por hora (COP)`}</label>
                                    <input type="number" min={0} name="fee" id="password" class="form-input" required />
                                </div>
                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="col-2"></div>

            </div>
        </>



    )
}


export default Booking