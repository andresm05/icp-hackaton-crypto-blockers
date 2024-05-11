import { useState, createContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        id: 1,
        role: 'propietario',
        email: '',
        phone: '',
        latitude: 1.0,
        longitude: 1.0
    })

    const [customer, setCustomer] = useState({
        id: 1,
        plate: '',
        size: 1,
        vehicle_name: '',
        latitude: 1.0,
        longitude: 1.0,
    })

    return (
        <UserContext.Provider value={{user, setUser, customer, setCustomer}}>
            {children}
        </UserContext.Provider>
    )
}