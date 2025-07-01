import React from "react";
import { useContext } from "react";
import LoggedContext from "./LoggedContext";
import Footer from "./Footer";

function Main(){
    const {state,changeState}=useContext(LoggedContext)
    console.log(state)
    return(
        <>
        <div>From Main Context : {state===false?" User Not Logined":"User Logined"}</div>
        <button onClick={changeState}>Change State</button>
        <Footer/>
        </>
    )
}

export default Main