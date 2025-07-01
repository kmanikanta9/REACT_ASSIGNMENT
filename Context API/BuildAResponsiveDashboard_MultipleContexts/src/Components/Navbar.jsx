import React, { useContext } from "react";
import { AuthContext, ThemeContext } from "./AuthProvider";


function Navbar(){
    const {theme,themeToggle}=useContext(ThemeContext)
    const {logged,toggleAuth}=useContext(AuthContext)

    console.log(theme,logged,themeToggle,toggleAuth)
    return(
        <div>
            <div>
                <h1 style={{color:theme=="dark"?"black":"white",backgroundColor:theme=="dark"?"white":"black"}}>This is the Theme State from Navbar: {theme}</h1>
                <button onClick={themeToggle}>Change Theme</button>
            </div>
            <div>
                <h1>This is from the Navbar State:{logged}</h1>
                <button onClick={toggleAuth}>Change Log State : {logged?"Logout":"LogIn"}</button>
            </div>
        </div>
    )
}

export default Navbar;