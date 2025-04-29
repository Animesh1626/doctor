'use client';

import { useRouter } from "next/navigation";
const ISSERVER = typeof window === 'undefined';

const { createContext, useContext, useState } = require("react");

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const router = useRouter();

    const [userLoggedIn, setUserLoggedIn] = useState(() => {
        const token = !ISSERVER && localStorage.getItem("user-token") || !ISSERVER && localStorage.getItem("doctor-token");
        return token ? true : false;
    });

    const logout = () => {
        const doctor = !ISSERVER && localStorage.getItem("doctor-token");
        const user = !ISSERVER && localStorage.getItem("user-token");
        if(doctor) {
            !ISSERVER && localStorage.removeItem("doctor-token");
            setUserLoggedIn(false);
            router.replace("/doctor-login");
        }else{
            !ISSERVER && localStorage.removeItem("user-token");
            setUserLoggedIn(false);
            router.replace("/user-login");
        }
    }

    const [doctorLoggedIn, setDoctorLoggedIn] = useState(() => {
        const token = !ISSERVER && localStorage.getItem("doctor-token");
        return token ? true : false;
    });

    const doctorlogout = () => {
        !ISSERVER && localStorage.removeItem("doctor-token");
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