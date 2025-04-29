'use client';

import { useRouter } from "next/navigation";

const { createContext, useContext, useState } = require("react");

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const router = useRouter();

    const [userLoggedIn, setUserLoggedIn] = useState(() => {
        const token = localStorage.getItem("user-token") || localStorage.getItem("doctor-token");
        return token ? true : false;
    });

    const logout = () => {
        const doctor = localStorage.getItem("doctor-token");
        const user = localStorage.getItem("user-token");
        if(doctor) {
            localStorage.removeItem("doctor-token");
            setUserLoggedIn(false);
            router.replace("/doctor-login");
        }else{
            localStorage.removeItem("user-token");
            setUserLoggedIn(false);
            router.replace("/user-login");
        }
    }

    const [doctorLoggedIn, setDoctorLoggedIn] = useState(() => {
        const token = localStorage.getItem("doctor-token");
        return token ? true : false;
    });

    const doctorlogout = () => {
        localStorage.removeItem("doctor-token");
        setDoctorLoggedIn(false);
        router.replace("/doctor-login");
    }

  

    return <AppContext.Provider value={{
        userLoggedIn,
        setUserLoggedIn,
        logout,
        doctorLoggedIn,
        setDoctorLoggedIn,
        doctorlogout    
        
    }}>{children}</AppContext.Provider>;
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;