import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";



function ThemeComponent(){
    const theme=useContext(ThemeContext)
    console.log(theme)

    return(
        <div>
            <h1 style={{color:theme=="dark"?"black":"white",backgroundColor:theme=="dark"?"white":"black"}}>This is from Theme Component</h1>
        </div>
    )
}

export default ThemeComponent;