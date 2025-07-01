import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { ThemeContext } from "./AuthProvider";




export function ThemeContextProvider({children}){
    const [theme,setTheme]=useState("light")

    function themeToggle(){
        setTheme(theme=="dark"?"light":"dark")
    }
    return(
        <div>
            <ThemeContext.Provider value={{theme,themeToggle}}>
                {children}
            </ThemeContext.Provider>
            
        </div>
    )
}
