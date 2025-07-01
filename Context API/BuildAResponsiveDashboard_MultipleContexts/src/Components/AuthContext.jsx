import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthProvider";


export function AuthContextProvider({children}){
    const[logged,setLogged]=useState(false)

    function toggleAuth(){
        setLogged(!logged)
    }
    return(
        <div>
            <AuthContext.Provider value={{logged,toggleAuth}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}