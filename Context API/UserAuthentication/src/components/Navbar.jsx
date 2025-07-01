import React from "react";
import { useState } from "react";
import LoggedContext from "./LoggedContext";
import Main from "./Main";


function Navbar({children}){
    const [state,setState]=useState(false)

    function changeState(){
        setState(!state)
    }
    return(
        <div>
            <LoggedContext.Provider value={{state,changeState}}>
                {children}
                <Main/>
            </LoggedContext.Provider>
        </div>
    )
}

export default Navbar;